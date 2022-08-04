import { Hit } from '../career_hero/career_hero.interface'

export default interface OpenPositionsTeaserInterface {
  type: string
  opt_location_filter: string
  opt_department_filter: string
  opt_headline: string
  ssr: [{ hits: Hit[] }]
}
