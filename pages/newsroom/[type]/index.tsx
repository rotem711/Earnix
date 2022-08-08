import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GetStaticPathsResult } from 'next'
import EntryBlogOverview from 'interfaces/entryBlogOverview'
import {
  OverviewNewsroomArticle,
} from 'interfaces/entryNewsroomOverview'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import Link from 'next/link'
import ARTICLE_SIZE from 'constants/articleSize'
import { GlobalContextProvider } from 'pages/_app'
import { topicOverviewQuery } from 'queries/newsroom'
import React, { useState } from 'react'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import gql, { useSWRQuery } from 'utils/dataLayer/gql'
import NewsroomPreview from 'components/generic/newsroom_preview/newsroom_preview'
import CtaSimpleDividerBlock from 'components/blocks/cta_simple_divider/cta_simple_divider'
import Badge from 'components/generic/badge/badge'
import Dropdown from 'components/generic/dropdown/dropdown'
import { renderDate } from 'utils/blog'
import ArticlePreview from 'components/blog/article_preview/article_preview'
import Header from '../../../components/generic/header/header'
import Footer from '../../../components/generic/footer/footer'

const Blog = (props: {
  entry: EntryBlogOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  articles: { data: OverviewNewsroomArticle[] }
  taxonomy: { data: { title: string; slug: string }[] }
  topics: { data: { title: string; slug: string }[] }
}) => {
  const {
    entry,
    nav,
    seo,
    header,
    globals,
    footer,
    translations,
    articles,
    taxonomy,
    topics,
  } = props
  console.log(entry)
  const DEFAULT_LIMIT = 9

  const [yearFilter, setYearFilter] = useState()
  const [topicFilter, setTopicFilter] = useState()

  const filter: any = {}
  if (yearFilter) {
    filter.blog_industry = { contains: yearFilter }
  }
  if (topicFilter) {
    filter.newsroom_topic = { contains: topicFilter }
  }

  const filtered = yearFilter || topicFilter
  const dirty = !!(filtered)
  const {
    data,
    // isLoading,
  }: {
    data: {
      articles: {
        data: OverviewNewsroomArticle[]
        total: number
      }
    }
    isLoading: boolean
  } = useSWRQuery(dirty && topicOverviewQuery, { DEFAULT_LIMIT, filter }, props)
  const dynamicArticles: OverviewNewsroomArticle[] = data.articles.data

  const yearOptions = dynamicArticles
    .map((article) => new Date(article.date).getFullYear())
    .filter(
      (value, index, self) => self.indexOf(value) === index,
    )

  const activeTax = taxonomy.data[0]

  let featuredArticleDetails = {
    author: articles.data[0].author_name,
    badges: [...articles.data[0].newsroom_topic],
    date: renderDate(articles.data[0].date),
    description: articles.data[0].blurb,
    image: articles.data[0].cover_image,
    title: articles.data[0].title,
    uri: articles.data[0].uri,
  }
  if (filtered) {
    featuredArticleDetails = {
      author: dynamicArticles[0].author_name,
      badges: [
        ...dynamicArticles[0].newsroom_topic,
      ],
      date: renderDate(dynamicArticles[0].date),
      description: dynamicArticles[0].blurb,
      image: dynamicArticles[0].cover_image,
      title: dynamicArticles[0].title,
      uri: dynamicArticles[0].uri,
    }
  }
  const filteredDynamicArticles = dynamicArticles.filter(
    (_, index) => (filtered ? index > 0 : index >= 0),
  )

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
          <Header nav={nav} data={header} darkMode />
          <div className="container">
            <div className="default-grid gap-y-64">
              <div className="xxl:col-span-8 xxl:col-start-3 lg:col-span-12 md:col-span-8 col-span-4">
                <div className="flex sm:flex-col md:flex-row items-start sm:items-left md:items-center justify-between">
                  <h2 className="text-orange-100 typo-h2">{activeTax?.title}</h2>
                  <div>
                    <div className="flex md:flex-col lg:flex-row gap-x-24 gap-y-8 lg:items-center md:items-end">
                      {(topicFilter || yearFilter) && (
                        <span className="typo-tag">Filter results:</span>
                      )}
                      <div className="flex flex-row gap-x-16 items-center relative">
                        {topicFilter ? (
                          <Badge
                            filled
                            onClick={() => setTopicFilter(() => undefined)}
                            text={topicFilter}
                            value={dynamicArticles.length}
                          />
                        ) : (
                          <Dropdown
                            name="Topic"
                            onSelect={setTopicFilter}
                            options={topics.data.map((item) => item.title)}
                          />
                        )}
                        {yearFilter ? (
                          <Badge
                            filled
                            onClick={() => setYearFilter(() => undefined)}
                            text={yearFilter}
                            value={dynamicArticles.length}
                          />
                        ) : (
                          <Dropdown
                            name="Year"
                            onSelect={setYearFilter}
                            options={yearOptions}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:mt-64 lg:mb-32 lg:py-12 md:mt-60 md:mb-40 mt-40 mb-28">
                  <a href={featuredArticleDetails.uri}>
                    <ArticlePreview
                      articleDetails={featuredArticleDetails}
                      setIndustryFilter={() => {}}
                      setTopicFilter={setTopicFilter}
                      size={ARTICLE_SIZE.FEATURED}
                    />
                  </a>
                </div>
                <div className="default-grid">
                  {filteredDynamicArticles.map((article) => (
                    <div className="col-span-4 lg:my-32 md:my-20 my-12" key={`article-wrapper-${article.id}`}>
                      <NewsroomPreview key={article.id} article={article} />
                    </div>
                  ))}
                </div>
                <div className="xl:mb-80 lg:mt-8 md:mb-64 md:mt-20 mb-40 mt-28 flex items-center justify-center">
                  <Link href="/newsroom">
                    <a
                      href="/newsroom"
                      rel="noreferrer"
                    >
                      <span className="typo-p-bold text-orange-100 hover:underline">{translations.VIEW_ALL}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {taxonomy.data[0] && (
            <CtaSimpleDividerBlock block={taxonomy.data[0] as any} />
          )}
        </main>
        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(
  topicOverviewQuery,
  (ctx) => {
    return {
      slug: ctx.params.type,
    }
  },
)

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const query = `
    query NewsRoomTerms {
      terms(taxonomy: "newsroom_types") {
        data {
          slug
          id
          title
        }
      }
    }
  `
  const { data } = await gql(query, {})
  const paths = data.terms.data.map(({ slug }) => {
    return {
      params: {
        type: slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
