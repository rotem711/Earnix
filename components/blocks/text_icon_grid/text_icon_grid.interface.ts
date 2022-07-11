import Asset from 'interfaces/asset'

export default interface TextIconGridInterface {
  type: string
  tig_headline: string
  tig_items: {
    copy: string
    heading: string
    icon: Asset
    link: string
  }
}
