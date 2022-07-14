const Translation = {
  EXAMPLE: {
    en_US: 'Example',
  },
  FOLLOW: {
    en_US: 'Follow us on',
  },
  FEATUREDPOST: {
    en_US: 'Featured Post',
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
