import React, { FunctionComponent } from 'react'
import styles from './teams.module.scss'
import TeamsInterface from './teams.interface'

export const typename = 'Set_Replicator_BlockTeams'

const TeamsBlock:FunctionComponent<{ block: TeamsInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Teams Block:
    {block.type}
  </div>
)

export default TeamsBlock
