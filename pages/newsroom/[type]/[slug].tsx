import { GetStaticPropsContext } from 'next'
import BlogLayout from 'layouts/blog'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import NewsRoomQuery from 'queries/newsroom'
import { StatamicPreviewData } from '../../api/preview'

export default BlogLayout

export const getStaticProps = getStaticPropsWrapper(
  NewsRoomQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    return {
      slug: ctx.params?.slug,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('newsroom')
