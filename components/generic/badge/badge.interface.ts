import { Dispatch } from 'react'

export default interface BadgeInterface {
  className?: string
  filled?: boolean
  onClick?: Dispatch<(prevState: undefined) => undefined>
  text: string
  value?: number
}
