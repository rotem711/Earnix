export default `
fragment BlockCtaBox on Set_Replicator_BlockCtaBox {
    type
    cb_background_image {
      ...CMSAsset
    }
    cb_bg_image_filter {
      value
    }
    cb_copy
    cb_cta_title
    cb_headline
    cb_cta_url
}
`
