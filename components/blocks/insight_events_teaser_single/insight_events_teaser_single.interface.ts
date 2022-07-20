import Asset from 'interfaces/asset'

export default interface InsightEventsTeaserSingleInterface {
  iets_headline: string
  iets_cta_title: string
  iets_cta_url: string
  iets_entry: {
    collection: {
        handle: string
    }
    cover_image: Asset
    uri: string
    title: string
    blurb: string
  }
}
