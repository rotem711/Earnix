const Translation = {
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
}

const translations = (lang): { [key: string]: string } => {
  const data = {}
  Object.keys(Translation).forEach((e) => {
    data[e] = Translation[e][lang]
  })
  return data
}

export default translations
