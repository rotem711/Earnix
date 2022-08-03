import DevGrid from 'components/generic/dev_grid/dev_grid'
import EntryNewsroomOverview, {
  OverviewNewsroomArticle,
} from 'interfaces/entryNewsroomOverview'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalContextProvider } from 'pages/_app'
import { overviewQuery } from 'queries/newsroom'
import React from 'react'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import Header from 'components/generic/header/header'
import Footer from 'components/generic/footer/footer'
import HeroBlock from 'components/blocks/hero/hero'
import CtaSimpleDividerBlock from 'components/blocks/cta_simple_divider/cta_simple_divider'
import TextVideoBlock from 'components/blocks/text_video/text_video'

const Blog = ({
  entry,
  nav,
  seo,
  header,
  globals,
  footer,
  translations,
  inTheNews,
  industryRecognition,
  pressReleases,
  socialFeed,
}: {
  entry: EntryNewsroomOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  inTheNews: { data: OverviewNewsroomArticle[] }
  industryRecognition: { data: OverviewNewsroomArticle[] }
  pressReleases: { data: OverviewNewsroomArticle[] }
  socialFeed: { data: OverviewNewsroomArticle[] }
}) => {
  console.log(entry, inTheNews, industryRecognition, pressReleases, socialFeed)
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
          <HeroBlock
            block={{
              ...entry as any,
              type: 'Hero',
            }}
          />
          <CtaSimpleDividerBlock
            block={entry as any}
          />
          <TextVideoBlock
            block={entry as any}
          />
        </main>

        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(overviewQuery, () => {})
