export default `
fragment BlockFullbleedTextImageWIcon on Set_Replicator_BlockFullbleedTextImageWIcon {
    fti_headline
    fti_copy
    fti_assets {
        ...CMSAsset
    }
    fti_icon_overlay {
        ...CMSAsset
    }
}
`
