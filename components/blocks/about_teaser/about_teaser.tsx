import React, { FunctionComponent } from 'react'
import styles from './about_teaser.module.scss'
import AboutTeaserInterface from './about_teaser.interface'

export const typename = 'Set_Replicator_BlockAboutTeaser'

const AboutTeaserBlock:FunctionComponent<{ block: AboutTeaserInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Aboutteaser Block:
    {block.type}
  </div>
)

export default AboutTeaserBlock
