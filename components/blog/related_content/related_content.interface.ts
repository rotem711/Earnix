import Asset from 'interfaces/asset'

export default interface RelatedContentInterface {
  data: {
    id: string
    title: string
    uri: string
    date: Date
    collection: {
      handle: string
    }
    cover_image: Asset
    blurb: string
  }[]
}
