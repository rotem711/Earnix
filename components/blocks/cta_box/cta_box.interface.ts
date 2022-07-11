import Asset from 'interfaces/asset'

export default interface CtaBoxInterface {
  type: string
  cb_background_image: Asset
  cb_copy: string
  cb_cta_title: string
  cb_headline: string
  cb_cta_url: string
}
