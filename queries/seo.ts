const SEOQuery = `
  query SEOMeta($id: String) {
    SeoMeta(page_id: $id) {
      # translations {
      #   exists
      #   id
      #   site
      #   is_current
      #   uri
      # }
      description
      og_description
      og_locale
      og_site_name
      og_type
      og_title
      og_url
      rel_author
      rel_canonical
      rel_home
      rel_next_
      rel_prev
      title
      twitter_card
      twitter_description
      twitter_site
      twitter_title
    }
  }
`
export default SEOQuery
