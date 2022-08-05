import React from 'react'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'

import Author from 'components/blog/author/author'
import Quote from 'components/blog/quote/quote'
import BlogImage from 'components/blog/blog_image/blog_image'
import Cta from 'components/blog/cta/cta'
import Content from 'components/blog/content/content'

import Asset from 'interfaces/asset'
import Entry from '../interfaces/entry'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import RelatedContent from 'components/blog/related_content/related_content'
import Subscribe from 'components/blog/subscribe/subscribe'
import DevGrid from 'components/generic/dev_grid/dev_grid'

const Brochures = ({
  content,
  entry,
  nav,
  seo,
  globals,
  header,
  footer,
  translations,
  related_articles,
}: {
  content: any
  entry: Entry
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
        <DevGrid />
        <Header nav={nav} data={header} darkMode />
        <div className="container grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-16 lg:gap-24 xl:gap-30">
          <div className="col-span-4 md:col-span-7 lg:col-span-8">
            {content.map((blogItem, blogItemIndex) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={blogItem.type + blogItemIndex}
                className="blogContentItem"
              >
                {
                  {
                    quote: <Quote quote={blogItem.quote} />,
                    image: (
                      <BlogImage
                        image={blogItem.image}
                        caption={blogItem.caption}
                      />
                    ),
                    cta_divider: (
                      <Cta
                        copy={blogItem.copy}
                        link_title={blogItem.cta_title}
                        link_url={blogItem.cta_url}
                      />
                    ),
                    text: <Content content={blogItem.text} />,
                  }[blogItem.type]
                }
              </div>
            ))}
            {/* <Author
              name={author_name}
              title={author_title}
              about={author_about}
              image={author_image}
              linkedin={linkedin_profile}
            /> */}
            <Subscribe />
            <RelatedContent data={related_articles} />
          </div>
        </div>
        {/* <Repeater blocks={entry.replicator} /> */}
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Brochures
