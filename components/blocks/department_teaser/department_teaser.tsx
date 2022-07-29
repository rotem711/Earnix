import React, { FunctionComponent } from 'react'
import styles from './department_teaser.module.scss'
import DepartmentTeaserInterface from './department_teaser.interface'

export const typename = 'Set_Replicator_BlockDepartmentTeaser'

const DepartmentTeaserBlock: FunctionComponent<{
  block: DepartmentTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root} container`}>
    Departmentteaser Block:
    {block.type}
  </div>
)

export default DepartmentTeaserBlock
