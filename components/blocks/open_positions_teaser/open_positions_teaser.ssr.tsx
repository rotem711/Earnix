import { MeiliSearch, SearchResponse } from 'meilisearch'
import { Hit } from '../career_hero/career_hero.interface'
import OpenPositionsTeaserInterface from './open_positions_teaser.interface'

export interface SSRGetJobs {
  hits: Hit[]
}

const ssrGetFilteredJobs = async ({
  props,
}: {
  props: OpenPositionsTeaserInterface
}): Promise<SSRGetJobs> => {
  const client = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MEILI_URL,
    apiKey: process.env.MEILI_SERVER_KEY,
  })
  const facetFilter = []
  if (props.opt_department_filter) {
    facetFilter.push(
      `department = "${props.opt_department_filter}"`,
    )
  }
  if (props.opt_location_filter) {
    facetFilter.push(
      `location.name = "${props.opt_location_filter}"`,
    )
  }
  console.log(facetFilter)
  const res: SearchResponse<Hit> = await client.index('jobs').search('', {
    facets: ['location.name', 'department'],
    filter: facetFilter,
  })

  return {
    hits: res.hits.slice(0, 3),
  }
}

export default ssrGetFilteredJobs
