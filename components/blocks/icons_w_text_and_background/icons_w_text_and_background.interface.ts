import Asset from 'interfaces/asset'

export default interface IconsWTextAndBackgroundInterface {
  itb_cta_title: string
  itb_cta_url: string
  itb_copy: string
  itb_headline: string
  type: string
  itb_icons: {
    copy: string
    icon: Asset,
  }[]
}
