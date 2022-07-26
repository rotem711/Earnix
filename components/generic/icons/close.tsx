import React from 'react'

const Close = ({ className = '' }: { className: string }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L27 27" stroke="black" />
    <path d="M1 27L27 1" stroke="black" />
  </svg>
)

export default Close
