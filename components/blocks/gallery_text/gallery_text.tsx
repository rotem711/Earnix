import React, { FunctionComponent } from 'react'
import styles from './gallery_text.module.scss'
import GalleryTextInterface from './gallery_text.interface'

export const typename = 'Set_Replicator_BlockGalleryText'

const GalleryTextBlock:FunctionComponent<{ block: GalleryTextInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Gallerytext Block:
    {block.type}
  </div>
)

export default GalleryTextBlock
