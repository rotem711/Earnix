import React from 'react'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'
import Entry from '../interfaces/entry'
import Repeater from '../utils/rendering/repeater'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import DevGrid from 'components/generic/dev_grid/dev_grid'

const Page = ({
  entry,
  nav,
  seo,
  globals,
  footer,
  translations,
}: {
  entry: Entry
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  footer: any
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
        <Header nav={nav} />
        {entry.title}
        <Repeater blocks={entry.replicator} />
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Page
