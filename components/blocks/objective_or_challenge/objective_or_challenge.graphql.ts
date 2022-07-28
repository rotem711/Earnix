export default `
fragment BlockObjectiveOrChallenge on Set_Replicator_BlockObjectiveOrChallenge {
    type
    oc_video_file
    oc_video_label
    oc_copy
    oc_eyebrow
    oc_headline
    oc_image {
      ...CMSAsset
    }
    oc_media_type {
      value
    }
}
`
