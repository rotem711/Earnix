export default `
fragment BlockQuoteSlider on Set_Replicator_BlockQuoteSlider {
  qs_headline
  qs_cta_title
  qs_cta_url
  qs_quotes {
    author
    quote
  }
}
`
