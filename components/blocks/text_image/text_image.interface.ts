import Asset from 'interfaces/asset'

export default interface TextImageInterface {
  ti_reverse: boolean
  ti_copy: string
  ti_cta_title: string
  ti_cta_url: string
  ti_headline: string
  ti_image: Asset
  ti_overlay_icon: Asset
}
