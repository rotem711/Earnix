import React, { FunctionComponent } from 'react'
import styles from './connect_with_us.module.scss'
import ConnectWithUsInterface from './connect_with_us.interface'

export const typename = 'Set_Replicator_BlockConnectWithUs'

const ConnectWithUsBlock:FunctionComponent<{ block: ConnectWithUsInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Connectwithus Block:
    {block.type}
  </div>
)

export default ConnectWithUsBlock
