import React from 'react'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'
import Author from 'components/blog/author/author'
import Asset from 'interfaces/asset'
import Entry from '../interfaces/entry'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import RelatedContent from 'components/blog/related_content/related_content'

const Blog = ({
  author_name,
  author_title,
  author_about,
  author_image,
  entry,
  linkedin_profile,
  nav,
  seo,
  globals,
  header,
  footer,
  translations,
  related_articles,
}: {
  author_name: string
  author_title: string
  author_about: string
  author_image: Asset
  entry: Entry
  linkedin_profile: string
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header: any
  footer: any
  related_articles: any
  translations: { [key: string]: string }
}) => (
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
        {true && process.env.NODE_ENV === 'development' && (
          <div className="devGrid w-full container">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-16 lg:gap-24 xl:gap-30 xxl:24 h-full">
              {Array(12)
                .fill({})
                .map(() => (
                  <div
                    className="col col-span-1"
                    key={new Date().getTime() + Math.random()}
                  />
                ))}
            </div>
          </div>
        )}
        <Header nav={nav} data={header} darkMode />
        <div className="container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-16 lg:gap-24 xl:gap-30">
          <div className="col-span-4 md:col-span-7 lg:col-span-8 xxl:col-span-5 xxl:col-start-3">
            <Author
              name={author_name}
              title={author_title}
              about={author_about}
              image={author_image}
              linkedin={linkedin_profile}
            />
            <RelatedContent data={related_articles} />
          </div>
        </div>
        {/* <Repeater blocks={entry.replicator} /> */}
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Blog
