import React from 'react'
import BrochureButtonInterface from './brochure_button.interface'
import styles from './brochure_button.module.scss'

const BrochureButton: React.FunctionComponent<BrochureButtonInterface> = ({
  onClick,
  text,
}) => (
  <button className={styles.brochureButton} onClick={onClick} type="button">
    {text}
  </button>
)

export default BrochureButton
