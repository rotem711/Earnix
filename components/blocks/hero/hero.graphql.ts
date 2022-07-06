export default `
fragment BlockHero on Set_Replicator_BlockHero {
    type
    hero_background_image {
      ...CMSAsset
    }
}
`
