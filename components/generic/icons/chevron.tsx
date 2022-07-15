import React from 'react'

const Chevron = ({ className = '' }: { className: string }) => (
  <svg
    className={className}
    width="19"
    height="12"
    viewBox="0 0 19 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 1.48541L9.51472 9.97069L1.02933 1.48531"
      stroke="#808080"
      strokeWidth="2"
    />
  </svg>
)

export default Chevron
