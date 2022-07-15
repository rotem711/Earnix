export default `
fragment BlockAboutTeaser on Set_Replicator_BlockAboutTeaser {
    type
    at_copy
    at_cta_title
    at_cta_url
    at_headline
    at_image {
        ...CMSAsset
    }
}
`
