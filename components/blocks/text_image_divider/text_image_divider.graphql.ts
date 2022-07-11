export default `
fragment BlockTextImageDivider on Set_Replicator_BlockTextImageDivider {
    type
    tid_copy
    tid_cta_title
    tid_cta_url
    tid_headline
    tid_image {
      ...CMSAsset
    }
}
`
