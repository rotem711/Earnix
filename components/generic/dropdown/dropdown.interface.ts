import { Dispatch } from 'react'

export default interface DropdownInterface {
  name: string
  onSelect: Dispatch<(prevState: undefined) => undefined>
  options: string[]|number[]
}
