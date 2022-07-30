export default `
fragment BlockLinkBoxGrid on Set_Replicator_BlockLinkBoxGrid {
    type
    lbg_links {
      description
      item_link
      main_label
    }
    lbg_headline
    lbg_cta_url
    lbg_cta_title
}
`
