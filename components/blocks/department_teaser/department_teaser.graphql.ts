export default `
fragment BlockDepartmentTeaser on Set_Replicator_BlockDepartmentTeaser {
    type
    dt_headline
    dt_departments {
      comeet_department_id
      department_label
    }
}
`
