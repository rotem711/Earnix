export default `
fragment BlockImpact on Set_Replicator_BlockImpact {
  type
  im_copy
  im_cta_title
  im_cta_url
  im_eyebrow
  im_headline
  im_icons {
    icon {
      ...CMSAsset
    }
    stat_headline
    statistic
  }
}
`
