import { SSRGetJobs } from './ssrGetJobs'

export default interface CareerHeroInterface {
  type: string
  ch_headline: string
  ch_teaser_copy: string
  ssr: [SSRGetJobs]
}

interface Location {
  name: string
  country: string
  city: string
  state: string
  postal_code: string
  street_name: string
  arrival_instructions?: any
  street_number: string
  timezone: string
  location_uid: string
  is_remote: boolean
}

export interface Hit {
  id: string
  title: string
  name: string
  department: string
  email: string
  location: Location
  url_comeet_hosted_page: string
  url_active_page: string
  employment_type: string
  experience_level?: any
  uid: string
  internal_use_custom_id?: any
  url_detected_page: string
  picture_url?: any
  time_updated: Date
  company_name: string
  position_url: string
  uri: string
}
