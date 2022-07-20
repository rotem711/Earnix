import Asset from 'interfaces/asset'

export default interface ObjectiveOrChallengeInterface {
  type: string
  oc_video_file: string
  oc_copy: string
  oc_eyebrow: string
  oc_headline: string
  oc_image: Asset
  oc_media_type: {
    value: string
  }
}
