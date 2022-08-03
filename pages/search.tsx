import React from 'react'
import { GlobalSet } from 'interfaces/globals'
import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GlobalContextProvider } from 'pages/_app'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import SearchContent from 'components/generic/search/search_content'

import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'
import PageQuery from '../queries/page'

const SearchPage = ({
  nav,
  globals,
  header,
  footer,
  translations,
}: {
  nav: any
  globals: GlobalSet
  header
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
      <main>
        <DevGrid />
        <Header nav={nav} data={header} darkMode />
        <SearchContent />
      </main>

      <Footer data={footer} />
    </div>
  </GlobalContextProvider>
)
export const getStaticProps = getStaticPropsWrapper(PageQuery, () => {})
export default SearchPage
