import React, { FunctionComponent } from 'react'
import styles from './logo_grid.module.scss'
import LogoGridInterface from './logo_grid.interface'

export const typename = 'Set_Replicator_BlockLogoGrid'

const LogoGridBlock:FunctionComponent<{ block: LogoGridInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Logogrid Block:
    {block.type}
  </div>
)

export default LogoGridBlock
