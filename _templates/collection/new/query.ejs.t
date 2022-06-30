import { gql } from '@apollo/client'
import blockInventory from '../utils/rendering/inventory'

const fragments = Object.values(blockInventory)
  .map((i) => i.query)
  .join('')
const fragmentDestructor = Object.values(blockInventory)
  .map((i) => `...${i.typename.replace('Set_Replicator_', '')}`)
  .join('\n')

export default gql`
  ${fragments}
  query page($uri: String) {
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
    entry(uri: $uri) {
      id
      title
      slug
      uri
      ... on Entry_Pages_Pages {
        replicator {
          __typename
          ${fragmentDestructor}
        }
      }
    }
    nav: nav(handle: "main_nav") {
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
