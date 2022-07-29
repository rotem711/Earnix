import React, { FunctionComponent } from 'react'
import styles from './hero_with_animated_lines.module.scss'
import HeroWithAnimatedLinesInterface from './hero_with_animated_lines.interface'

export const typename = 'Set_Replicator_BlockHeroWithAnimatedLines'

const HeroWithAnimatedLinesBlock: FunctionComponent<{
  block: HeroWithAnimatedLinesInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Herowithanimatedlines Block:
    {block.type}
  </div>
)

export default HeroWithAnimatedLinesBlock
