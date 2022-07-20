import { GetStaticPropsContext } from 'next'
import SpotlightLayout from 'layouts/spotlight'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import SpotlightQuery from 'queries/spotlight'
import { StatamicPreviewData } from '../api/preview'

export default SpotlightLayout

export const getStaticProps = getStaticPropsWrapper(
  SpotlightQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    return {
      slug: ctx.params?.slug,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('customer_spotlights')
