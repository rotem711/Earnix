import React from 'react'
import BadgeInterface from './badge.interface'
import styles from './badge.module.scss'

const Badge: React.FunctionComponent<BadgeInterface> = ({
  filled, onClick, text, value,
}) => {
  const handleBadgeClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    onClick(undefined)
  }

  return (
    <span
      className={`typo-tag ${styles.badge} ${filled ? styles['badge--filled'] : ''}`}
      onClick={handleBadgeClick}
      role="presentation"
    >
      {text}
      {value && (<span className={`typo-tag ${styles.badge__value}`}>{value}</span>)}
    </span>
  )
}

export default Badge
