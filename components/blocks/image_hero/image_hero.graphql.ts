export default `
fragment BlockImageHero on Set_Replicator_BlockImageHero {
    type
    ih_headline
    ih_copy
    ih_background_image {
      ...CMSAsset
    }
}
`
