const Translation = {
  ABOUT_AUTHOR: {
    en_US: 'About the author',
  },
  EXAMPLE: {
    en_US: 'Example',
  },
  FOLLOW: {
    en_US: 'Follow us on',
  },
  FORM_SUBMIT: {
    en_US: 'Submit',
  },
  FORMPLACEHOLDER_SELECT: {
    en_US: 'Select Placeholder',
  },
  FORMPLACEHOLDER_MESSAGE: {
    en_US: 'Message Placeholder',
  },
  FORM_OPTIN: {
    en_US: 'Opt-in text area with checkbox adjacent',
  },
  FEATUREDPOST: {
    en_US: 'Featured Post',
  },
  FOUNDRESULTS: {
    en_US: 'Found %COUNT% Results',
  },
  LATESTNEWS: {
    en_US: 'Latest News',
  },
  LATESTEVENT: {
    en_US: 'Latest Event',
  },
  LATESTINSIGHT: {
    en_US: 'Latest Insight',
  },
  READMORE: {
    en_US: 'Read more',
  },
  READMORETEASERSINGLE: {
    en_US: 'Link to highlight',
  },
  RELATEDCONTENT: {
    en_US: 'Related content',
  },
  SIGNUP: {
    en_US: 'Sign up',
  },
  SUBSCRIBEBLOG: {
    en_US: 'Subscribe to our blog',
  },
  LOAD_MORE: {
    en_US: 'Load More',
  },
  MONTHS: {
    en_US: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  },
  SEARCHPLACEHOLDER: {
    en_US: 'Search',
  },
  SEARCHTERM: {
    en_US: 'Search %TERM%',
  },
  EARNIX_BLOG: {
    en_US: 'Earnix Blog',
  },
  SHAREARTICLE: {
    en_US: 'Share article',
  },
  JOBS_HEADLINE: {
    en_US: '$x jobs in $y locations',
  },
  POSITIONS: {
    en_US: 'Positions',
  },
  JOIN_OUR_TEAM: {
    en_US: 'Join our team',
  },
}

const translations = (lang): { [key: string]: string } => {
  const data = {}
  Object.keys(Translation).forEach((e) => {
    data[e] = Translation[e][lang]
  })
  return data
}

export default translations
