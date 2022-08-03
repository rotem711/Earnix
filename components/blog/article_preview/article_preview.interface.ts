import Asset from 'interfaces/asset'
import { Dispatch } from 'react'

export default interface ArticlePreviewInterface {
  articleDetails: {
    author: string
    badges: {
      id: string
      title: string
    }[]
    date: string
    description: string
    image: Asset
    title: string
  }
  setIndustryFilter: Dispatch<(prevState: undefined) => undefined>
  setTopicFilter: Dispatch<(prevState: undefined) => undefined>
  size: string
}
