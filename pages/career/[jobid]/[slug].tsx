import { GetStaticPropsResult } from 'next'
import fetch from 'isomorphic-fetch'
import slugify from 'slugify'
import { Job } from 'interfaces/jobs'
import JobPage from 'layouts/job'
import { getStaticPropsWrapper } from 'utils/dataLayer/entryQuery'
import jobPage from 'queries/jobPage'

export default JobPage

const ALL_POSITIONS_URL = () => `https://www.comeet.co/careers-api/2.0/company/${process.env.NEXT_PUBLIC_COMEET_COMPANY_ID}/positions?token=${process.env.COMEET_API_KEY}`
const SINGLE_POSITIONS_URL = (pid: string) => `https://www.comeet.co/careers-api/2.0/company/${process.env.NEXT_PUBLIC_COMEET_COMPANY_ID}/positions/${pid}?details=true&token=${process.env.COMEET_API_KEY}`

export const getStaticProps = async (props): Promise<GetStaticPropsResult<{ job: Job }>> => {
  const pid = props.params.jobid as string
  const res = await fetch(SINGLE_POSITIONS_URL(pid))
  if (res.status > 300) {
    return { notFound: true }
  }
  const json = await res.json()

  const pageProps = await getStaticPropsWrapper(jobPage, () => {})(props) as any
  // revalidate every hour
  return { props: { job: json, ...pageProps.props } }
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
