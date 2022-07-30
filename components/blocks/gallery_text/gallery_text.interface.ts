import Asset from 'interfaces/asset'

export default interface GalleryTextInterface {
  type: string
  gt_images: Asset[]
  gt_headline: string
  gt_copy: string
}
