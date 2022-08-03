import { Dispatch } from 'react'

export default interface BadgesContainerInterface {
  setIndustryFilter?: Dispatch<(prevState: undefined) => undefined | string>
  setTopicFilter?: Dispatch<(prevState: undefined) => undefined | string>
  values: {
    id: string
    title: string
  }[]
}
