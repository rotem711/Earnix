import Asset from 'interfaces/asset'

export default interface IconsWTextInterface {
  ict_copy: string
  ict_cta_title: string
  ict_cta_url: string
  ict_headline: string
  ict_icons: {
    icon: Asset
    text: string
  }[]
  ict_background: Asset
}
