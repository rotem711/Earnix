import Asset from './asset'

export default interface EntryBlogOverview {
  id: string | number,
  title: string,
  slug: string,
  main_featured_item: OverviewArticle,
}

export interface OverviewArticle {
  id: string | number,
  uri: string
  slug: string
  cover_image: Asset
  author_name: string
  date: string
  blurb: string
}
