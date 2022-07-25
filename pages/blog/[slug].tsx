import { GetStaticPropsContext } from 'next'
import BlogLayout from 'layouts/blog'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import BlogQuery from 'queries/blog'
import { StatamicPreviewData } from '../api/preview'

export default BlogLayout

export const getStaticProps = getStaticPropsWrapper(
  BlogQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    return {
      slug: ctx.params?.slug,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('blog')
