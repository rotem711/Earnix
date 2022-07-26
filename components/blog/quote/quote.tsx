import React from 'react'
import useIsMobile from 'utils/hooks'
import styles from './quote.module.scss'
import QuoteInterface from './quote.interface'

const Quote = (data: QuoteInterface) => {
  const { quote = '' } = data

  const isMobile = useIsMobile('lg')

  return (
    <div className={`${styles.root}`}>
      {isMobile ? <h6>{quote}</h6> : <h4>{quote}</h4>}
    </div>
  )
}

export default Quote
