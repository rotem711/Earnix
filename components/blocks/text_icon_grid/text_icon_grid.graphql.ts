export default `
fragment BlockTextIconGrid on Set_Replicator_BlockTextIconGrid {
    type
    tig_headline
    tig_items {
      copy
      heading
      icon {
        ...CMSAsset
      }
      link
    }
}
`
