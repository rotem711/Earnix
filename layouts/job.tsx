import React from 'react'
import Head from 'next/head'
import { GlobalSet } from 'interfaces/globals'
import DevGrid from 'components/generic/dev_grid/dev_grid'
import { GlobalContextProvider } from 'pages/_app'
import CareerHero from 'components/career/career_hero/career_hero'
import { Job } from 'interfaces/jobs'
import CareerContent from 'components/career/career_content/career_content'
import dynamic from 'next/dynamic'
import Entry from '../interfaces/entry'
import Repeater from '../utils/rendering/repeater'
import Header from '../components/generic/header/header'
import Footer from '../components/generic/footer/footer'

const ApplicationForm = dynamic(
  () => import('components/career/application_form/application_form'),
  { ssr: false },
)

const JobPage = ({
  job,
  nav,
  globals,
  entry,
  header,
  footer,
  translations,
}: {
  job: Job
  entry: Entry
  nav: any
  globals: GlobalSet
  header
  footer: any
  translations: { [key: string]: string }
}) => {
  if (!job) return null
  return (
    <GlobalContextProvider
      value={{
        ...globals,
        translations,
      }}
    >
      <div>
        <Head>
          <title>{job.name}</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
          />
        </Head>
        <main>
          <DevGrid />
          <Header nav={nav} data={header} darkMode={false} />
          <CareerHero
            block={{
              headline: job.name,
              location: job.location.city,
              department: job.department,
            }}
          />
          <div className="container default-grid mt-56 md:mt-64 lg:mt-80 relative mb-80">
            <div className="col-span-4 lg:col-span-6 xxl:col-span-4 xxl:col-start-3 mb-60 md:mb-0">
              <CareerContent content={job.details[0]?.value || ''} />
            </div>
            <div className="col-span-4 lg:col-span-5 lg:col-start-8 xxl:col-span-4 xxl:col-start-8 sticky">
              <ApplicationForm jobId={job.uid} />
            </div>
          </div>
          <Repeater blocks={entry.replicator} />
        </main>

        <Footer data={footer} />
      </div>
    </GlobalContextProvider>
  )
}

export default JobPage
