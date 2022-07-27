import Asset from 'interfaces/asset'

export default interface ThreeCardsInterface {
  tc_cards: {
    icon: Asset
    headline: string
    copy: string
  }[]
  tc_cta_title: string
  tc_cta_url: string
}
