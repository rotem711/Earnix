import React, { FunctionComponent } from 'react'
import styles from './copy_with_background_divider.module.scss'
import CopyWithBackgroundDividerInterface from './copy_with_background_divider.interface'

export const typename = 'Set_Replicator_BlockCopyWithBackgroundDivider'

const CopyWithBackgroundDividerBlock: FunctionComponent<{
  block: CopyWithBackgroundDividerInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Copywithbackgrounddivider Block:
    {block.type}
  </div>
)

export default CopyWithBackgroundDividerBlock
