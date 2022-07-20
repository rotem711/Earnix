import React from 'react'
import parse from 'html-react-parser'

import styles from './content.module.scss'
import ContentInterface from './content.interface'

const Content = (data: ContentInterface) => {
  const { content = '' } = data

  return <div className={`${styles.root}`}>{parse(content)}</div>
}

export default Content
