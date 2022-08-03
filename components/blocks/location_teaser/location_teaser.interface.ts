import Asset from 'interfaces/asset'

export default interface LocationTeaserInterface {
  type: string
  lt_headline: string
  lt_copy: string
  lt_locations: Array<{
    copy: string
    image: Asset
    location_name: string
  }>
}
