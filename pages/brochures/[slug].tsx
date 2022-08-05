import { GetStaticPropsContext } from 'next'
import BrochuresLayout from 'layouts/brochures'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import BrochuresQuery from 'queries/brochures'
import { StatamicPreviewData } from '../api/preview'

export default BrochuresLayout

export const getStaticProps = getStaticPropsWrapper(
  BrochuresQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    return {
      slug: ctx.params?.slug,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('brochures')
