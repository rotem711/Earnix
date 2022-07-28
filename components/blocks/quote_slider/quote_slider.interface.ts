export default interface QuoteSliderInterface {
  qs_headline: string
  qs_cta_title: string
  qs_cta_url: string
  qs_quotes: {
    author: string
    quote: string
  }[]
}
