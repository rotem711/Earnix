export default `
fragment BlockIconsWText on Set_Replicator_BlockIconsWText {
  ict_copy
  ict_cta_title
  ict_cta_url
  ict_headline
  ict_background {
    ...CMSAsset
  }
  ict_icons {
    icon {
      ...CMSAsset
    }
    text
  }
}
`
