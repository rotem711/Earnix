import Asset from './asset'
import SEOMeta from './seoMeta'

export default interface EntryNewsroomOverview {
  id: string | number,
  title: string,
  slug: string,
  seo: SEOMeta
  csd_cta_url: string,
  csd_headline: string,
  csd_link_text: string,
  cta_banner: string,
  hero_background: string,
  hero_background_image: Asset,
  hero_background_image_responsive: Asset,
  hero_background_type: {
    label: string,
    value: string,
  }
  hero_centered: string,
  hero_blue_gradient: string,
  hero_copy: string,
  hero_copy_background: string,
  hero_headline: string,
  hero_large_version: string,
  hero_orange_gradient: string,
  hero_vimeo_id: string,
  hero_vimeo_id_responsive: string,
  image_text: string,
  tv_copy: string,
  tv_headline: string,
  tv_statistics: {
    stat_label: string,
    stat_value: string,
  }
  tv_vimeo_id: string,
}

export interface OverviewNewsroomArticle {
  id: string | number,
  uri: string
  slug: string
  cover_image: Asset
  author_name: string
  date: string
  title: string
  blurb: string
  newsroom_types: {
    id: string
    slug: string
  }
  newsroom_topic: {
    id: string
    slug: string
    title: string
  }[]
}
