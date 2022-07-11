export default `
fragment BlockCtaBanner on Set_Replicator_BlockCtaBanner {
    type
    ctab_copy
    ctab_cta_title
    ctab_cta_url
    ctab_headline
    ctab_ctaBackground {
      ... on Asset_Assets {
        permalink
      }
    }
}
`
