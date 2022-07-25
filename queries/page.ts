import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'

import blockInventory from '../utils/rendering/inventory'
import AssetFragment from './fragments/asset'

const fragments = Object.values(blockInventory)
  .filter((i) => i.layouts.includes('page'))
  .map((i) => i.query)
  .join('')
const fragmentDestructor = Object.values(blockInventory)
  .filter((i) => i.layouts.includes('page'))
  .map((i) => `...${i.typename.replace('Set_Replicator_', '')}`)
  .join('\n')

export default `
  ${AssetFragment}
  ${fragments}
  query page($uri: String) {
    ${HeaderQuery}
    ${FooterQuery},
    entry(uri: $uri) {
      id
      title
      slug
      uri
      seo {
        description
        og_description
        og_locale
        og_site_name
        og_type
        og_title
        og_url
        rel_author
        rel_canonical
        rel_home
        rel_next_
        rel_prev
        title
        twitter_card
        twitter_description
        twitter_site
        twitter_title
      }
      ... on Entry_Pages_Pages {
        replicator {
          __typename
          ${fragmentDestructor}
        }
      }
    }
    nav(handle: "main_nav") {
      tree {
        page {
          id
          url
          title
        }
        depth
        children {
          depth
          page {
            id
            url
            title
          }
        }
      }
    }
  }
`
