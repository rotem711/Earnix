import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GetStaticPathsResult } from 'next'
import EntryBlogOverview, {
  OverviewArticle,
} from 'interfaces/entryBlogOverview'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalContextProvider } from 'pages/_app'
import { topicOverviewQuery } from 'queries/newsroom'
import React from 'react'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import gql from 'utils/dataLayer/gql'
import Header from '../../../components/generic/header/header'
import Footer from '../../../components/generic/footer/footer'

const Blog = ({
  entry,
  nav,
  seo,
  header,
  globals,
  footer,
  translations,
  articles,
  taxonomy,
}: {
  entry: EntryBlogOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  articles: OverviewArticle[]
  taxonomy: { data: { title: string, slug: string }[] }
}) => {
  const activeTax = taxonomy.data[0]
  console.log(entry, articles, taxonomy)
  return (
    <GlobalContextProvider
      value={{
        ...globals,
        translations,
      }}
    >
      <div>
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
          />
        </Head>
        <main>
          <DevGrid />
          <Header nav={nav} data={header} darkMode={false} />
          <h1 className="my-100">{activeTax?.title}</h1>
        </main>

        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(topicOverviewQuery, (ctx) => {
  return {
    slug: ctx.params.type,
  }
})

export const getStaticPaths = async ():Promise<GetStaticPathsResult> => {
  const query = `
    query NewsRoomTerms {
      terms(taxonomy: "newsroom_types") {
        data {
          slug
          id
          title
        }
      }
    }
  `
  const { data } = await gql(query, {})
  const paths = data.terms.data.map(({ slug }) => {
    return {
      params: {
        type: slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}