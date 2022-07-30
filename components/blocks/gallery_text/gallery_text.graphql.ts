export default `
fragment BlockGalleryText on Set_Replicator_BlockGalleryText {
    type
    gt_images {
      ...CMSAsset
    }
    gt_headline
    gt_copy
}
`
