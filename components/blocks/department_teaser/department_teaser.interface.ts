export default interface DepartmentTeaserInterface {
  type: string
  dt_headline: string
  dt_departments: {
    comeet_department_id: string
    department_label: string
  }
}
