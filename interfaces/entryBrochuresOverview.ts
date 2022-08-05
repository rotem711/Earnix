import Asset from './asset'

export default interface EntryBrochuresOverview {
  id: string | number
  main_featured_item: OverviewBrochure
  slug: string
  title: string
}

export interface OverviewBrochure {
  blurb: string
  brochure_industry: {
    id: string
    title: string
  }[]
  brochure_topic: {
    title: string
    id: string
  }[]
  cover_image: Asset
  date: string
  id: string
  slug: string
  uri: string
}
