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
import NewsroomPreview from 'components/generic/newsroom_preview/newsroom_preview'
import Link from 'next/link'

const NewsroomType = ({
  items,
  title,
  viewAll,
  overviewLink,
}: {
  items: OverviewNewsroomArticle[]
  title: string
  viewAll: string
  overviewLink: string | undefined
}) => {
  if (!items.length) return null
  return (
    <>
      <h3 className="mb-40">{title}</h3>
      <div className="flex gap-24 overflow-x-scroll md:overflow-visible lg:default-grid mb-40">
        {items.map((pr) => (
          <div className="min-w-[75vw] md:min-w-full col-span-4">
            <NewsroomPreview key={pr.id} article={pr} />
          </div>
        ))}
      </div>
      <Link href={overviewLink}>
        <a className="text-center w-full block typo-h5 text-orange-100 mb-64 hover:underline">
          {viewAll}
        </a>
      </Link>
    </>
  )
}

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
  taxonomies,
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
  taxonomies: {
    data: {
      slug: string
      title: string
      id: string
    }[]
  }
}) => {
  console.log(taxonomies)
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
              ...(entry as any),
              type: 'Hero',
            }}
          />
          <div className="container mt-100 md:mt-110">
            <NewsroomType
              items={pressReleases.data}
              viewAll={translations.VIEW_ALL}
              title={
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::press-releases',
                )?.title
              }
              overviewLink={`/newsroom/${
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::press-releases',
                )?.slug
              }`}
            />
            <NewsroomType
              items={inTheNews.data}
              viewAll={translations.VIEW_ALL}
              title={
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::in-the-news',
                )?.title
              }
              overviewLink={`/newsroom/${
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::in-the-news',
                )?.slug
              }`}
            />
            <NewsroomType
              items={industryRecognition.data}
              viewAll={translations.VIEW_ALL}
              title={
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::industry-recognition',
                )?.title
              }
              overviewLink={`/newsroom/${
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::industry-recognition',
                )?.slug
              }`}
            />
          </div>
          <CtaSimpleDividerBlock block={entry as any} />
          <div className="container mt-64">
            <NewsroomType
              items={socialFeed.data}
              viewAll={translations.VIEW_ALL}
              title={
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::social-feed',
                )?.title
              }
              overviewLink={`/newsroom/${
                taxonomies.data.find(
                  (t) => t.id === 'newsroom_types::social-feed',
                )?.slug
              }`}
            />
          </div>
          <TextVideoBlock block={entry as any} />
        </main>
        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(overviewQuery, () => {})
