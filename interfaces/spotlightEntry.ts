import Asset from './asset'

export default interface SpotlightEntry {
  id: string | number,
  title: string,
  slug: string,
  spotlight_replicator: any[],
  customer_logo: Asset,
  description
}
