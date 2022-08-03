export default interface FeaturedContentInterface {
  author_name: string
  blog_industry: {
    id: string
    title: string
  }[]
  blog_topic: {
    id: string
    title: string
  }[]
  blurb: string
  cover_image: {
    alt: string | null
    extension: string
    focusCss: string
    height: number
    id: string
    isImage: boolean
    permalink: string
    placeholder: string
    url: string
    width: number
  }
  date: string
  id: string | number
  slug: string
  title: string
  uri: string
}
