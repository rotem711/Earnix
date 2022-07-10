import React, { FunctionComponent } from 'react'
import styles from './next_gen_teaser.module.scss'
import NextGenTeaserInterface from './next_gen_teaser.interface'

export const typename = 'Set_Replicator_BlockNextGenTeaser'

const NextGenTeaserBlock:FunctionComponent<{ block: NextGenTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Nextgenteaser Block:
    {block.type}
  </div>
)

export default NextGenTeaserBlock
