import React from 'react'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'
import Repeater from 'utils/rendering/repeater'
import SpotlightEntry from 'interfaces/spotlightEntry'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import DevGrid from '../components/generic/dev_grid/dev_grid'

const Spotlight = ({
  entry,
  nav,
  seo,
  globals,
  header,
  footer,
  translations,
}: {
  entry: SpotlightEntry
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header: any
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
      </Head>
      <main>
        <DevGrid />
        <Header nav={nav} data={header} darkMode />
        {/* {"TODO: ADD HEADER COMPONENT HERE"} */}
        <Repeater blocks={entry.spotlight_replicator} />
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)

export default Spotlight
