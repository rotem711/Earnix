import { Dispatch, SetStateAction } from 'react'

export default interface BrochurePreviewInterface {
  badgeText?: string
  details: {
    author: string
    badges: {
      id: string
      title: string
    }[]
    date: string
    description: string
    image: {
      alt?: string
      height: number
      permalink: string
      placeholder: string
      width: number
    }
    title: string
    uri: string | null
  }
  featured?: boolean
  handleIndustryValueSelection?: Dispatch<SetStateAction<string>>
  handleTopicValueSelection?: Dispatch<SetStateAction<string>>
}
