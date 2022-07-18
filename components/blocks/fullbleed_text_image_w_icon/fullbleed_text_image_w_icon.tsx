import React, { FunctionComponent } from 'react'
import styles from './fullbleed_text_image_w_icon.module.scss'
import FullbleedTextImageWIconInterface from './fullbleed_text_image_w_icon.interface'

export const typename = 'Set_Replicator_BlockFullbleedTextImageWIcon'

const FullbleedTextImageWIconBlock: FunctionComponent<{
  block: FullbleedTextImageWIconInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Fullbleedtextimagewicon Block:
    {block.type}
  </div>
)

export default FullbleedTextImageWIconBlock
