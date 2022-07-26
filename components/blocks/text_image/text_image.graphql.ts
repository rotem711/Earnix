export default `
fragment BlockTextImage on Set_Replicator_BlockTextImage {
    type
    ti_reverse
    ti_copy
    ti_cta_title
    ti_cta_url
    ti_headline
    ti_image {
        ...CMSAsset
    }
    ti_overlay_icon {
        ...CMSAsset
    }
}
`
