import { GetStaticPropsContext } from 'next'
import Page from 'layouts/page'
import { getStaticPathsWrapper, getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import PageQuery from 'queries/page'
import { StatamicPreviewData } from './api/preview'

const slugArrayToUri = (slugs: string[]): string => `/${slugs.join('/')}`

export default Page

export const getStaticProps = getStaticPropsWrapper(
  PageQuery,
  (ctx: GetStaticPropsContext<any, StatamicPreviewData>) => {
    const uri = slugArrayToUri(ctx.params?.slug as string[] || [])
    return {
      uri,
    }
  },
)
export const getStaticPaths = getStaticPathsWrapper('pages')
