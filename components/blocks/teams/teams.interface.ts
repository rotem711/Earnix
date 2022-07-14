export default interface TeamsInterface {
  gt_headline: string
  gt_highlight_numbers: {
    label: string
    text_value: string
  }[]
  gt_locations: {
    city_and_region: string
    country_label: string
    street_name: string
  }[]
}
