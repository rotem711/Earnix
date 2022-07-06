import React, { FunctionComponent } from 'react'
import styles from './quote_slider.module.scss'
import QuoteSliderInterface from './quote_slider.interface'

export const typename = 'Set_Replicator_BlockQuoteSlider'

const QuoteSliderBlock:FunctionComponent<{ block: QuoteSliderInterface }> = ({ block }) => (
  <div
    className={`${styles.root} container`}
  >
    Quoteslider Block:
    {block.type}
  </div>
)

export default QuoteSliderBlock
