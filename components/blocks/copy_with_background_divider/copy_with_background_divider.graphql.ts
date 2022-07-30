export default `
fragment BlockCopyWithBackgroundDivider on Set_Replicator_BlockCopyWithBackgroundDivider {
    type
    cwb_headline
    cwb_copy
    cwb_background_image {
      ...CMSAsset
    }
}
`
