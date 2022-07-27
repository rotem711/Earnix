export default `
fragment BlockThreeCards on Set_Replicator_BlockThreeCards {
    tc_cards {
        icon {
            ...CMSAsset
        }
        headline
        copy
    }
    tc_cta_title
    tc_cta_url
}
`
