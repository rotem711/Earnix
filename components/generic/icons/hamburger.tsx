import React from 'react'

const Hamburger = ({ className = '' }: {className: string}) => (
  <svg className={className} width="32" height="33" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line y1="7.96094" x2="32" y2="7.96094" strokeWidth="2" />
    <line y1="15.9609" x2="32" y2="15.9609" strokeWidth="2" />
    <line y1="15.9609" x2="32" y2="15.9609" strokeWidth="2" />
    <line y1="23.9609" x2="32" y2="23.9609" strokeWidth="2" />
  </svg>
)

export default Hamburger
