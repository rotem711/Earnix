import { MeiliSearch, SearchResponse } from 'meilisearch'
import { Hit } from './career_hero.interface'

export interface SSRGetJobs {
  facets: {
    department: {
      [key: string]: number
    }
    'location.name': {
      [key: string]: number
    }
  },
  departmentCount: number
  locationCount: number
  totalCount: number
}

const ssrGetJobs = async (): Promise<SSRGetJobs> => {
  const client = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MEILI_URL,
    apiKey: process.env.MEILI_SERVER_KEY,
  })
  const res:SearchResponse<Hit> = await client.index('jobs').search('', {
    facets: ['location.name', 'department'],
  })

  const departmentCount = Object.values(
    res.facetDistribution.department,
  ).length
  const locationCount = Object.values(
    res.facetDistribution['location.name'],
  ).length

  return {
    facets: res.facetDistribution as any,
    departmentCount,
    locationCount,
    totalCount: res.estimatedTotalHits,
  }
}

export default ssrGetJobs
