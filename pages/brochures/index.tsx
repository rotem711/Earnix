import BrochureButton from 'components/brochures/brochure_button/brochure_button'
import BrochurePreview from 'components/brochures/brochure_preview/brochure_preview'
import Badge from 'components/generic/badge/badge'
import Dropdown from 'components/generic/dropdown/dropdown'
import useBrochuresPage from 'hooks/useBrochuresPage'
import React from 'react'
import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GlobalSet } from 'interfaces/globals'
import SEOMeta from 'interfaces/seoMeta'
import Head from 'next/head'
import { GlobalContextProvider } from 'pages/_app'
import { brochuresOverviewQuery } from 'queries/brochures'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import EntryBrochuresOverview, {
  OverviewBrochure,
} from 'interfaces/entryBrochuresOverview'
import Header from '../../components/generic/header/header'
import Footer from '../../components/generic/footer/footer'

const Brochures = ({
  entry,
  nav,
  seo,
  header,
  globals,
  footer,
  translations,
  brochures: { data },
}: {
  entry: EntryBrochuresOverview
  nav: any
  seo: SEOMeta
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
  brochures: {
    data: OverviewBrochure[]
  }
}) => {
  const {
    allBrochuresDetails,
    featuredBrochureDetails,
    handleIndustryBadgeClick,
    handleIndustryValueSelection,
    handleLoadMoreButtonClick,
    handleTopicBadgeClick,
    handleTopicValueSelection,
    industryBadgeValue,
    industryFilter,
    industryOptions,
    topicBadgeValue,
    topicFilter,
    topicOptions,
  } = useBrochuresPage({
    brochures: data,
    featuredItem: entry.main_featured_item,
  })

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
      </Head>
      <Header nav={nav} data={header} darkMode />
      <main>
        <DevGrid />
        <div className="container default-grid">
          <div className="col-span-4 md:col-span-12 gap-x-30 pb-60 xxl:pb-80">
            <div className="flex flex-col md:flex-row items-left md:items-center justify-between">
              <h2 className="pb-8 text-orange-100">{entry.title}</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-x-24 gap-y-8 pb-20 md:pb-0">
                {(topicFilter || industryFilter) && (
                  <span className="typo-tag">Filter results:</span>
                )}
                <div className="flex flex-row gap-x-16 items-center relative">
                  {topicFilter ? (
                    <Badge
                      filled
                      onClick={handleTopicBadgeClick}
                      text={topicFilter}
                      value={topicBadgeValue}
                    />
                  ) : (
                    <Dropdown
                      name="Topic"
                      onSelect={handleTopicValueSelection}
                      options={topicOptions}
                    />
                  )}
                  {industryFilter ? (
                    <Badge
                      filled
                      onClick={handleIndustryBadgeClick}
                      text={industryFilter}
                      value={industryBadgeValue}
                    />
                  ) : (
                    <Dropdown
                      name="Industry"
                      onSelect={handleIndustryValueSelection}
                      options={industryOptions}
                    />
                  )}
                </div>
              </div>
            </div>
            <BrochurePreview
              details={featuredBrochureDetails}
              featured
              handleIndustryValueSelection={handleIndustryValueSelection}
              handleTopicValueSelection={handleTopicValueSelection}
            />
            <div className="flex flex-col gap-y-32 md:grid md:grid-cols-4 md:gap-x-24 lg:grid-cols-12">
              {allBrochuresDetails.map((brochureDetails) => (
                <BrochurePreview
                  badgeText="TODO: BADGE2"
                  details={brochureDetails}
                  handleIndustryValueSelection={handleIndustryValueSelection}
                  handleTopicValueSelection={handleTopicValueSelection}
                />
              ))}
            </div>
            <BrochureButton
              onClick={handleLoadMoreButtonClick}
              text="Load more"
            />
          </div>
        </div>
      </main>
      <Footer data={footer} />
    </GlobalContextProvider>
  )
}

export default Brochures

export const getStaticProps = getStaticPropsWrapper(
  brochuresOverviewQuery,
  () => {},
)
