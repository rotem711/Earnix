export default `
fragment BlockLocationTeaser on Set_Replicator_BlockLocationTeaser {
  type
  lt_headline
  lt_copy
  lt_locations {
    copy
    image {
      ...CMSAsset
    }
    location_name
  }
}
`
