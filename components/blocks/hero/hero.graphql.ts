export default `
fragment BlockHero on Set_Replicator_BlockHero {
    type
    hero_centered
    hero_copy
    hero_copy_background
    hero_headline
    hero_large_version
    hero_orange_gradient
    hero_vimeo_id
    hero_vimeo_id_responsive
    hero_blue_gradient
    hero_narrow
    hero_background_image {
      ...CMSAsset
    }
    hero_background_image_responsive {
      ...CMSAsset
    }
    hero_background_type {
      label
      value
    }
}
`
