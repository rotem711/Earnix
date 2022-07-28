import React, { FunctionComponent } from 'react'
import ObjectiveOrChallengeInterface from './objective_or_challenge.interface'
import Challenge from './challenge/challenge'
import Objective from './objective/objective'

export const typename = 'Set_Replicator_BlockObjectiveOrChallenge'

const ObjectiveOrChallengeBlock: FunctionComponent<{
  block: ObjectiveOrChallengeInterface
}> = ({ block }) => ((block.oc_media_type.value === 'image')
  ? (
    <Challenge
      copy={block.oc_copy}
      eyebrow={block.oc_eyebrow}
      headline={block.oc_headline}
      image={block.oc_image}
    />
  )
  : (
    <Objective
      copy={block.oc_copy}
      eyebrow={block.oc_eyebrow}
      headline={block.oc_headline}
      video={block.oc_video_file}
      videoLabel={block.oc_video_label}
    />
  )
)

export default ObjectiveOrChallengeBlock
