import Asset from 'interfaces/asset'

export default interface CardTeaserInterface {
  cardType: string
  headline: string
  label: string
  blurb: string
  maxBlurbLines: number
  image: Asset
  location: string
  date: Date
  ctaLink: {
    title: string
    href: string
  }
  categories: {
    title: string
  }[]
}
