export default `
fragment BlockProductTeaser on Set_Replicator_BlockProductTeaser {
    type
    pt_headline
    pt_background_image {
        ...CMSAsset
    }
    pt_copy
    pt_cta_title
    pt_cta_url
    pt_ferris_wheel_center_icon {
        ...CMSAsset
    }
    pt_ferris_wheel_icons {
        icon {
            ...CMSAsset
        }
        text
    }
}
`
