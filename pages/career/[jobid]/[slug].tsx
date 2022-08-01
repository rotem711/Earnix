import React from 'react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import fetch from 'isomorphic-fetch'
import slugify from 'slugify'
import { Job } from 'interfaces/jobs'

const CareersPage = ({ job }: { job: Job }) => {
  if (!job) return null
  return (
    <h1>
      JOB:
      {job.name}
    </h1>
  )
}

export default CareersPage

const ALL_POSITIONS_URL = () => `https://www.comeet.co/careers-api/2.0/company/${process.env.COMEET_COMPANY_ID}/positions?token=${process.env.COMEET_API_KEY}`
const SINGLE_POSITIONS_URL = (pid: string) => `https://www.comeet.co/careers-api/2.0/company/${process.env.COMEET_COMPANY_ID}/positions/${pid}?token=${process.env.COMEET_API_KEY}`

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<{ job: Job }>> => {
  const pid = context.params.jobid as string
  const res = await fetch(SINGLE_POSITIONS_URL(pid))
  if (res.status > 300) {
    return { notFound: true }
  }
  const json = await res.json()
  // revalidate every hour
  return { props: { job: json }, revalidate: 60 * 60 }
}

export const getStaticPaths = async () => {
  const res = await fetch(ALL_POSITIONS_URL())
  const json = await res.json()
  const paths = json.map((job: Job) => {
    return {
      params: { jobid: job.uid, slug: slugify(job.name.toLowerCase()) },
    }
  })
  return {
    paths,
    fallback: true,
  }
}
