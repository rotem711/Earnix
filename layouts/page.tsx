import React from 'react'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'
import Entry from '../interfaces/entry'
import Repeater from '../utils/rendering/repeater'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Page = ({
  entry,
  nav,
  seo,
  globals,
}: {
  entry: Entry
  nav: any
  seo: SEOMeta
  globals: GlobalSet
}) => (
  <GlobalContextProvider
    value={{
      ...globals,
    }}
  >
    <div>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {true && process.env.NODE_ENV === 'development' && (
          <div className="devGrid w-full container">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-x-16 h-full">
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
        <Header nav={nav} />
        {entry.title}
        <Repeater blocks={entry.replicator} />
      </main>

      <Footer />
    </div>
  </GlobalContextProvider>
)

export default Page
