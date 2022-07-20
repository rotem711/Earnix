import React from 'react'
import styles from './quote.module.scss'
import QuoteInterface from './quote.interface'

const Quote = (data : QuoteInterface) => {
  const {
    quote = '',
  } = data

  return (
    <div className={`${styles.root}`}>
      <h4>{quote}</h4>
    </div>
  )
}

export default Quote
