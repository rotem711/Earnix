export interface Location {
  name: string;
  country: string;
  city: string;
  state?: any;
  postal_code?: any;
  street_name: string;
  arrival_instructions?: any;
  street_number?: any;
  timezone: string;
  location_uid: string;
  is_remote: boolean;
}

export interface Job {
  name: string;
  department: string;
  email: string;
  email_alias?: any;
  url_comeet_hosted_page: string;
  url_active_page: string;
  employment_type?: any;
  experience_level?: any;
  uid: string;
  location: Location;
  internal_use_custom_id?: any;
  is_consent_needed: boolean;
  referrals_reward?: any;
  is_reward: boolean;
  is_company_reward: boolean;
  company_referrals_reward: string;
  url_detected_page: string;
  picture_url?: any;
  time_updated: Date;
  company_name: string;
  position_url: string;
  questionnaires: any[];
  details: {
    name: string;
    order: number;
    value: string;
  }[]
}
