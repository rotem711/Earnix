import Asset from 'interfaces/asset'

export default interface InsightEventsTeaserDoubleOrTripleInterface {
  ietd_first_item_is_content: boolean
  ietd_copy: string
  ietd_cta_link: string
  ietd_cta_text: string
  ietd_further_infos_link: string
  ietd_further_infos_text: string
  ietd_entries: {
    id: string
    date: Date
    cover_image: Asset
    blurb: string
    uri: string
    title: string
    collection: {
      handle: string
    }
  }[]
  ietd_headline: string
}
