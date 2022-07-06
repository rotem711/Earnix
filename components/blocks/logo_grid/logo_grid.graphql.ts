export default `
fragment BlockLogoGrid on Set_Replicator_BlockLogoGrid {
    type,
    lg_cta_url
    lg_cta_title
    lg_logos {
        logo {
            ...CMSAsset
        }
    }
}
`
