import React from 'react'
import parse from 'html-react-parser'
import styles from './career_content.module.scss'

const CareerContent = ({ content }: {content: string}) => (
  <div className={styles.root}>
    {parse(content)}
  </div>
)

export default CareerContent
