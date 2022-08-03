import { Dispatch } from 'react'

export default interface BadgeInterface {
  filled?: boolean
  onClick: Dispatch<(prevState: undefined) => undefined>
  text: string
  value?: number
}
