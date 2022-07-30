export default `
fragment BlockGalleryDivider on Set_Replicator_BlockGalleryDivider {
    type
    gd_images {
      ...CMSAsset
    }
}
`
