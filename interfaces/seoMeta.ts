interface SEOMeta {
  translations: [{
    exists: boolean,
    id: string,
    site: string,
    is_current: boolean,
    uri: string,
  }]
  description: string,
  og_description: string
  og_locale: string
  og_site_name: string
  og_type: string
  og_title: string
  og_url: string
  rel_author: string
  rel_canonical: string
  rel_home: string
  rel_next_: string
  rel_prev: string
  title: string
  twitter_card: string
  twitter_description: string
  twitter_site: string
  twitter_title: string
}
export default SEOMeta
