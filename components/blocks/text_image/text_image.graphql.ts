export default `
fragment BlockTextImage on Set_Replicator_BlockTextImage {
    type
    headline
    headline_h1
    left_image {
      ...CMSAsset
    }
    type
    __typename
}
`
