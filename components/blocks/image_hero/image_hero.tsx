import React, { FunctionComponent } from 'react'
import styles from './image_hero.module.scss'
import ImageHeroInterface from './image_hero.interface'

export const typename = 'Set_Replicator_BlockImageHero'

const ImageHeroBlock:FunctionComponent<{ block: ImageHeroInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Imagehero Block:
    {block.type}
  </div>
)

export default ImageHeroBlock
