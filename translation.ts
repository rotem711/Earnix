const Translation = {
  EXAMPLE: {
    en_US: 'Example',
  },
  FOLLOW: {
    en_US: 'Follow us on',
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
