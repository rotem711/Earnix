import React from 'react'

const CircularCTA = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="#F44D2E" />
    <path d="M22.4569 30.2132L33.0635 19.6066L22.4569 9.00003" stroke="white" />
    <path d="M33 19.6066H6" stroke="white" />
  </svg>
)

export default CircularCTA
