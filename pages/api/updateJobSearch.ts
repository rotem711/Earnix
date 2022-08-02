import { NextApiResponse } from 'next'
import { Job } from 'interfaces/jobs'
import fetch from 'isomorphic-fetch'
import { MeiliSearch } from 'meilisearch'
import slugify from 'slugify'

const client = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILI_URL,
  apiKey: process.env.MEILI_SERVER_KEY,
})

export default async function handler(_, response: NextApiResponse) {
  const URL = `https://www.comeet.co/careers-api/2.0/company/${process.env.NEXT_PUBLIC_COMEET_COMPANY_ID}/positions?token=${process.env.COMEET_API_KEY}`
  const res = await fetch(URL)
  const jobs: Job[] = await res.json()
  const index = client.index('jobs')

  await index.addDocuments(
    jobs.map((job) => {
      return {
        id: job.uid.replaceAll('.', '-'),
        title: job.name,
        uri: `/career/${job.uid}/${slugify(job.name, { lower: true })}`,
        ...job,
      }
    }),
  )
  response.send({
    success: true,
  })
}
