import React from 'react'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import Translation from 'translation'
import { GlobalSet } from 'interfaces/globals'
import Header from '../components/generic/header/header'
import PageQuery from '../queries/page'
import { GlobalContextProvider } from './_app'

// pages/404.js
/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
const Custom404 = ({
  nav,
  globalSet,
}: {
  nav: any
  globalSet: GlobalSet
}) => {
  const TranslationString = Translation('en_GB')
  return (
    <GlobalContextProvider
      value={{ ...globalSet, ...{ translation: TranslationString } }}
    >
      <div>
        <Header nav={nav} />
        404
      </div>
    </GlobalContextProvider>
  )
}

export const getStaticProps = getStaticPropsWrapper(PageQuery, () => {})
export default Custom404
