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
  LATESTNEWS: {
    en_US: 'Latest News',
  },
  LATESTEVENT: {
    en_US: 'Latest Event',
  },
  LATESTINSIGHT: {
    en_US: 'Latest Insight',
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
  MONTHS: {
    en_US: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
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
