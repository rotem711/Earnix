---
to: pages/<%= h.inflection.underscore(base_path) %>/<%= h.inflection.underscore(name) %>.tsx
---
import React from 'react'
import Head from 'next/head'
import Entry from 'interfaces/entry'
import Repeater from 'utils/rendering/repeater'
import Header from 'components/generic/header/header'
import Footer from 'components/generic/footer/footer'

export default function Page({ entry, nav }: { entry: Entry, nav: any }) {
  return (
    <div>
      <Head>
        <title>PXLP - WebStack</title>
        <meta name="description" content="pxlp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header nav={nav} />
        Collection
      </main>

      <Footer />
    </div>
  )
}
