import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import blockInventory from 'utils/rendering/inventory'
import { StatamicPreviewData } from 'pages/api/preview'
import gql from './gql'

export const getStaticPropsWrapper = (
  query: string,
  variables: (context: GetStaticPropsContext<any, StatamicPreviewData>) => any,
) => async (
  ctx: GetStaticPropsContext<any, StatamicPreviewData>,
):Promise<GetStaticPropsResult<any>> => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
    throw new Error('Failed to load the graphql endpoint. Please make sure it is defined in your .env.local file')
  }

  const uri = new URL(process.env.NEXT_PUBLIC_GRAPHQL_URL)
  if (ctx.preview && ctx.previewData?.previewToken) {
    uri.searchParams.append('token', ctx.previewData?.previewToken)
  }
  const { data, errors } = await gql(query, variables(ctx))

  if (errors) {
    throw new Error(JSON.stringify(errors))
  }

  if (!data || !data.entry || errors) {
    return {
      notFound: true,
    }
  }

  // get extra queries of components
  const extraQueries = []
  data.entry.replicator?.forEach((module) => {
    const blockItem = Object.values(blockInventory).find(
      (b) => b.typename === module.__typename,
    )

    if (blockItem && blockItem.extraQueries) {
      extraQueries.push(...blockItem.extraQueries)
    }
  })

  const extraQueriesResult = await Promise.all(
    extraQueries.map((extraQuery) => gql(
      extraQuery,
      // variables: {}, // TODO
    )),
  )

  // add extra query results to modules
  const modifiedModules = [...(data.entry.replicator || [])]
  extraQueriesResult.forEach((res) => {
    // parse key
    const alias = Object.keys(res.data).length ? Object.keys(res.data)[0] : ''
    const splittedAlias = alias.split('__')
    if (!alias || splittedAlias.length !== 2) {
      console.error('unknwon alias in extra query')
      return
    }
    const moduleName = splittedAlias[0]
    const key = splittedAlias[1]

    const index = modifiedModules.findIndex(
      (m) => m.__typename === moduleName,
    )
    const moduleData = { ...modifiedModules[index], [key]: res.data[alias] }
    modifiedModules.splice(index, 1, moduleData)
  })

  // merge result objects except modules
  const resultData = { ...data.entry, entry: { replicator: [] } }
  Object.keys(data).forEach((key) => {
    if (key !== 'entry') resultData[key] = data[key]
    else {
      Object.keys(data[key]).forEach((innerKey) => {
        if (innerKey !== 'replicator') {
          resultData[key][innerKey] = data[key][innerKey]
        }
      })
    }
  })

  // add modules to object
  resultData.entry.replicator = modifiedModules

  return {
    props: {
      ...resultData,
      // globals: d.data,
    },
  }
}

export const getStaticPathsWrapper = (collection: string) => async () => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
    throw new Error('Failed to load the graphql endpoint. Please make sure it is defined in your .env.local file')
  }
  const res = await gql(
    `
      query pages($collection: [String]) {
        entries(collection: $collection) {
          data {
            id
            title
            slug
            uri
          }
        }
      }
    `,
    {
      collection,
    },
  )
  if (!res) {
    return {
      paths: [],
      fallback: true,
    }
  }
  const paths = res.data.entries.data.map((e) => {
    return {
      params: { slug: collection === 'pages' ? e.uri?.substring(1).split('/') || e.slug : e.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
