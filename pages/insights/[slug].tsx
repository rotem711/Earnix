import { GetStaticPropsContext } from 'next'
import InsightLayout from 'layouts/insights'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import BlogQuery from 'queries/insights'
import { StatamicPreviewData } from '../api/preview'

export default InsightLayout

export const getStaticProps = getStaticPropsWrapper(
  BlogQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    return {
      slug: ctx.params?.slug,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('insights')
