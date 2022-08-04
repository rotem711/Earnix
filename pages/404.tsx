import React from 'react'
import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GlobalSet } from 'interfaces/globals'
import { GlobalContextProvider } from 'pages/_app'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'

import pageQuery from 'queries/page'
import NotFoundBlock from 'components/generic/404/404'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const Custom404 = ({
  nav,
  globals,
  header,
  footer,
  translations,
  notfound,
}: {
  nav: any
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  notfound: any
}) => (
  <GlobalContextProvider
    value={{
      ...globals,
      translations,
    }}
  >
    <div>
      <main>
        <DevGrid />
        <Header nav={nav} data={header} darkMode={false} />

        <NotFoundBlock data={notfound} />
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)
export const getStaticProps = getStaticPropsWrapper(pageQuery, () => {})
export default Custom404
