import Asset from 'interfaces/asset'

export default interface ImpactInterface {
    type: string
    im_copy: string
    im_cta_title: string
    im_cta_url: string
    im_eyebrow: string
    im_headline: string
    im_icons: Array<{
      icon: Array<Asset>
      stat_headline: string
      statistic: string
    }>
}
