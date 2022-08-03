import React, { FunctionComponent } from 'react'
import styles from './department_teaser.module.scss'
import DepartmentTeaserInterface from './department_teaser.interface'

export const typename = 'Set_Replicator_BlockDepartmentTeaser'

const DepartmentTeaserBlock: FunctionComponent<{
  block: DepartmentTeaserInterface
}> = ({ block }) => (
  <div className={`${styles.root} container grid grid-cols-12 default-grid`}>
    <div className={`${styles.contentWrapper} col-start-1 col-span-12`}>
      <div className={`${styles.headline} typo-h3`}>{block.dt_headline}</div>
      <div className={styles.departmentsWrapper}>
        {block.dt_departments.map((department) => (
          <div className={styles.department} key={department.department_label}>
            <div className={`${styles.departmentLabel} typo-h6`}>{department.department_label}</div>
            <div className={`${styles.jobsInLocations} typo-p`}>x jobs in y locations</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default DepartmentTeaserBlock
