/* eslint-disable import/prefer-default-export */
export const renderDate = (date: string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const monthName = newDate.toLocaleString('default', { month: 'long' })
  const day = newDate.getDate()
  return `${monthName} ${day}, ${year}`
}
