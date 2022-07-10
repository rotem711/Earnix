import React, { FunctionComponent } from 'react'
import styles from './cta_box.module.scss'
import CtaBoxInterface from './cta_box.interface'

export const typename = 'Set_Replicator_BlockCtaBox'

const CtaBoxBlock:FunctionComponent<{ block: CtaBoxInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Ctabox Block:
    {block.type}
  </div>
)

export default CtaBoxBlock
