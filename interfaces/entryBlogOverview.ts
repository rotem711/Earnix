import Asset from './asset'

export default interface EntryBlogOverview {
  id: string | number,
  title: string,
  slug: string,
  main_featured_item: OverviewArticle,
  industries: BlogTerms,
  topics: BlogTerms,
}

export interface BlogTerms {
  data: {
    id: string
    title: string
    slug: string
  }[]
}

export interface OverviewArticle {
  id: string | number,
  uri: string
  title: string
  slug: string
  cover_image: Asset
  author_name: string
  date: string
  blurb: string
  blog_topic: {
    title: string
    id: string
  }[]
  blog_industry: {
    id: string
    title: string
  }[]
}
