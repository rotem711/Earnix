/* eslint-disable max-len */
import ArticlePreview from 'components/blog/article_preview/article_preview'
import FeaturedContent from 'components/blog/featured_content/featured_content'
import Badge from 'components/generic/badge/badge'
import DevGrid from 'components/generic/dev_grid/dev_grid'
import Dropdown from 'components/generic/dropdown/dropdown'
import ARTICLE_SIZE from 'constants/articleSize'
import EntryBlogOverview, {
  OverviewArticle,
} from 'interfaces/entryBlogOverview'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalContextProvider } from 'pages/_app'
import { insightsOverviewQuery, lazyArticlesQuery } from 'queries/insights'
import React, { useState } from 'react'
import { renderDate } from 'utils/blog'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import { useSWRQuery } from 'utils/dataLayer/gql'
import HeroBlock from 'components/blocks/hero/hero'
import Header from '../../components/generic/header/header'
import Footer from '../../components/generic/footer/footer'
import Button from '../../components/generic/button/button'

const Blog = (props: {
  entry: EntryBlogOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  featured: { data: OverviewArticle[] }
}) => {
  const {
    entry,
    nav,
    seo,
    header,
    globals,
    footer,
    translations,
    featured,
  } = props
  const DEFAULT_LIMIT = 5
  const PAGE_SIZE = 5

  const [limit, setLimit] = useState(DEFAULT_LIMIT)
  const [industryFilter, setIndustryFilter] = useState()
  const [topicFilter, setTopicFilter] = useState()

  // {blog_industry: { contains: "Insurance"}, blog_topic: { contains: "Consumer"}}
  const filter: any = {}
  if (industryFilter) {
    filter.blog_industry = { contains: industryFilter }
  }
  if (topicFilter) {
    filter.blog_topic = { contains: topicFilter }
  }

  const filtered = industryFilter || topicFilter
  const dirty = !!(DEFAULT_LIMIT !== limit || filtered)
  const {
    data,
  }: // isLoading,
  {
    data: {
      articles: {
        data: OverviewArticle[]
        total: number
      }
    }
    isLoading: boolean
  } = useSWRQuery(dirty && lazyArticlesQuery, { limit, filter }, props)
  const dynamicArticles: OverviewArticle[] = data.articles.data

  const loadMore = () => {
    setLimit(limit + PAGE_SIZE)
  }

  const hasMore = limit < data.articles.total

  // console.log(dynamicArticles, isLoading, hasMore)
  // console.log(featured.data)

  let featuredArticleDetails = {
    // author: featured.data[0].author_name,
    badges: [
      ...(featured.data[0]?.blog_industry || []),
      ...(featured.data[0]?.blog_topic || []),
    ],
    date: renderDate(featured.data[0].date),
    description: featured.data[0].blurb,
    image: featured.data[0].cover_image,
    title: featured.data[0].title,
    uri: featured.data[0].uri,
  }
  if (filtered) {
    featuredArticleDetails = {
      // author: dynamicArticles[0].author_name,
      badges: [
        ...dynamicArticles[0].blog_industry,
        ...dynamicArticles[0].blog_topic,
      ],
      date: renderDate(dynamicArticles[0].date),
      description: dynamicArticles[0].blurb,
      image: dynamicArticles[0].cover_image,
      title: dynamicArticles[0].title,
      uri: dynamicArticles[0].uri,
    }
  }
  let counter = -1

  const filteredDynamicArticles = dynamicArticles.filter((_, index) => (filtered ? index > 0 : index >= 0))

  const articlesInFirstCarouselQuantity = typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 999

  const renderArticleDetails = (article: any) => {
    return {
      author: article.author_name,
      badges: [...article.blog_industry, ...article.blog_topic],
      date: renderDate(article.date),
      description: article.blurb,
      image: article.cover_image,
      title: article.title,
    }
  }

  return (
    <GlobalContextProvider
      value={{
        ...globals,
        translations,
      }}
    >
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header nav={nav} data={header} darkMode />
      <main>
        <DevGrid />
        <HeroBlock block={entry as any} />
        <div className="container mt-42">
          <div className="w-full flex justify-end mb-40">
            <div>
              <div className="flex md:flex-col lg:flex-row gap-x-24 gap-y-8 lg:items-center md:items-end">
                {(topicFilter || industryFilter) && (
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
                      options={dynamicArticles
                        .map((article) => article.blog_topic.map((blog) => blog.title))
                        .flat()
                        .filter(
                          (value, index, self) => self.indexOf(value) === index,
                        )}
                    />
                  )}
                  {industryFilter ? (
                    <Badge
                      filled
                      onClick={() => setIndustryFilter(() => undefined)}
                      text={industryFilter}
                      value={dynamicArticles.length}
                    />
                  ) : (
                    <Dropdown
                      name="Industry"
                      onSelect={setIndustryFilter}
                      options={dynamicArticles
                        .map((article) => article.blog_industry.map((blog) => blog.title))
                        .flat()
                        .filter(
                          (value, index, self) => self.indexOf(value) === index,
                        )}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="gap-x-30 grid md:grid-cols-12 pb-40 md:pb-80 sm:pb-40">
            <div className="md:col-span-12 xxl:col-span-8 xxl:col-start-3">
              <a href={featuredArticleDetails.uri}>
                <ArticlePreview
                  articleDetails={featuredArticleDetails}
                  setIndustryFilter={setIndustryFilter}
                  setTopicFilter={setTopicFilter}
                  size={ARTICLE_SIZE.FEATURED}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-20 block md:hidden pb-40">
            <FeaturedContent
              featuredContent={featured.data}
              setIndustryFilter={setIndustryFilter}
              setTopicFilter={setTopicFilter}
            />
          </div>
          <div className="gap-30 grid grid-cols-3 md:grid-cols-8 lg:grid-cols-12 overflow-x-scroll sm:overflow-x-hidden">
            <div className="col-span-3 md:col-span-8 xxl:col-span-6 xxl:col-start-3 flex flex-col gap-x-30 gap-y-60 md:grid-cols-8 pb-80">
              <div className="flex gap-x-30 gap-y-50 md:grid md:grid-cols-8 overflow-x-auto">
                {filteredDynamicArticles.map((article) => {
                  if (counter < articlesInFirstCarouselQuantity) {
                    counter += 1
                    const articleDetails = renderArticleDetails(article)
                    if (article.id === featured.data[0].id) {
                      counter -= 1
                      return null
                    }
                    const size = (counter + 1) % 3 === 0
                      ? ARTICLE_SIZE.WIDE
                      : ARTICLE_SIZE.NARROW
                    return (
                      <>
                        <div
                          className={
                            // eslint-disable-next-line no-nested-ternary
                            size === ARTICLE_SIZE.NARROW
                              ? 'col-span-6 md:col-span-4 grid-cols-12'
                              : counter + 1 === 3
                                ? 'col-span-6 md:col-span-5 lg:col-span-8'
                                : 'col-span-6 md:col-span-8 grid-cols-12'
                          }
                        >
                          <a href={article.uri} key={article.id}>
                            <ArticlePreview
                              articleDetails={articleDetails}
                              setIndustryFilter={setIndustryFilter}
                              setTopicFilter={setTopicFilter}
                              size={size}
                            />
                          </a>
                        </div>
                        {counter + 1 === 3 && (
                          <div className="col-span-3 flex flex-col gap-20 hidden md:block sm:hidden lg:hidden">
                            <FeaturedContent
                              featuredContent={featured.data}
                              setIndustryFilter={setIndustryFilter}
                              setTopicFilter={setTopicFilter}
                            />
                            <p>TODO: Subscribe to newsletter CTA</p>
                          </div>
                        )}
                      </>
                    )
                  }
                  return null
                })}
              </div>
              <p className="sm:visible md:hidden">
                TODO: Subscribe to newsletter CTA
              </p>
              <div className="flex gap-x-30 gap-y-50 md:grid md:grid-cols-8 overflow-x-auto md:hidden sm:visible">
                {filteredDynamicArticles.map((article, index) => {
                  if (counter >= articlesInFirstCarouselQuantity && index > counter) {
                    counter += 1
                    const articleDetails = renderArticleDetails(article)
                    if (article.id === featured.data[0].id) {
                      counter -= 1
                      return null
                    }
                    const size = (counter + 1) % 3 === 0
                      ? ARTICLE_SIZE.WIDE
                      : ARTICLE_SIZE.NARROW
                    return (
                      <>
                        <div
                          className={
                            // eslint-disable-next-line no-nested-ternary
                            size === ARTICLE_SIZE.NARROW
                              ? 'col-span-6 md:col-span-4 grid-cols-12'
                              : counter + 1 === 3
                                ? 'col-span-6 md:col-span-5 lg:col-span-8'
                                : 'col-span-6 md:col-span-8 grid-cols-12'
                          }
                        >
                          <a href={article.uri} key={article.id}>
                            <ArticlePreview
                              articleDetails={articleDetails}
                              setIndustryFilter={setIndustryFilter}
                              setTopicFilter={setTopicFilter}
                              size={size}
                            />
                          </a>
                        </div>
                        {counter + 1 === 3 && (
                          <div className="col-span-3 flex flex-col gap-20 hidden md:block sm:hidden lg:hidden">
                            <FeaturedContent
                              featuredContent={featured.data}
                              setIndustryFilter={setIndustryFilter}
                              setTopicFilter={setTopicFilter}
                            />
                            <p>TODO: Subscribe to newsletter CTA</p>
                          </div>
                        )}
                      </>
                    )
                  }
                  return null
                })}
              </div>
              {hasMore && (
                <div className="grid grid-cols-8">
                  <div className="col-span-2 col-start-4 grid">
                    <Button onClick={loadMore} title={translations.LOAD_MORE} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-3 lg:col-span-4 xxl:col-span-2 flex flex-col gap-20 hidden sm:hidden lg:block">
              <FeaturedContent
                featuredContent={featured.data}
                setIndustryFilter={setIndustryFilter}
                setTopicFilter={setTopicFilter}
              />
              <p>TODO: Subscribe to newsletter CTA</p>
            </div>
          </div>
        </div>
      </main>
      <Footer data={footer} />
    </GlobalContextProvider>
  )
}

export default Blog

export const getStaticProps = getStaticPropsWrapper(
  insightsOverviewQuery,
  () => {},
)
