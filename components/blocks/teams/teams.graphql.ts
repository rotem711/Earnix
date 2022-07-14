export default `
fragment BlockTeams on Set_Replicator_BlockTeams {
  gt_headline
  gt_highlight_numbers {
    label
    text_value
  }
  gt_locations {
    city_and_region
    country_label
    street_name
  }
}
`
