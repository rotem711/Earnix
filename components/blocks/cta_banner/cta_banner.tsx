import React, { FunctionComponent } from 'react'
import styles from './cta_banner.module.scss'
import CtaBannerInterface from './cta_banner.interface'

export const typename = 'Set_Replicator_BlockCtaBanner'

const CtaBannerBlock:FunctionComponent<{ block: CtaBannerInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Ctabanner Block:
    {block.type}
  </div>
)

export default CtaBannerBlock
