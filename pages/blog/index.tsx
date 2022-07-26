import DevGrid from 'components/generic/dev_grid/dev_grid'
import EntryBlogOverview, {
  OverviewArticle,
} from 'interfaces/entryBlogOverview'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalContextProvider } from 'pages/_app'
import { blogOverviewQuery } from 'queries/blog'
import React from 'react'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import Header from '../../components/generic/header/header'
import Footer from '../../components/generic/footer/footer'

const Blog = ({
  entry,
  nav,
  seo,
  header,
  globals,
  footer,
  translations,
  articles,
}: {
  entry: EntryBlogOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  articles: OverviewArticle[]
}) => {
  console.log(entry, articles)
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
          {entry.title}
        </main>

        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(blogOverviewQuery, () => {})
