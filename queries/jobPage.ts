import HeaderQuery from 'components/generic/header/header.extraqueries.graphql'
import FooterQuery from 'components/generic/footer/footer.extraqueries.graphql'

import blockInventory from '../utils/rendering/inventory'
import AssetFragment from './fragments/asset'
import nav from './fragments/nav'

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
  query jobPage {
    ${HeaderQuery}
    ${FooterQuery},
    entry: globalSet(handle: "job_posting_content") {
      handle
      ... on GlobalSet_JobPostingContent {
        __typename
        replicator {
          __typename
          ${fragmentDestructor}
        }
      }
    }
    ${nav}
  }
`
