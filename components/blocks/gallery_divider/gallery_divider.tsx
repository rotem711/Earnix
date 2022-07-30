import React, { FunctionComponent } from 'react'
import styles from './gallery_divider.module.scss'
import GalleryDividerInterface from './gallery_divider.interface'

export const typename = 'Set_Replicator_BlockGalleryDivider'

const GalleryDividerBlock:FunctionComponent<{ block: GalleryDividerInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Gallerydivider Block:
    {block.type}
  </div>
)

export default GalleryDividerBlock
