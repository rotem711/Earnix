import React from 'react'

const DevGrid = () => {
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="devGrid w-full container">
      <div className="default-grid h-full">
        {Array(12)
          .fill({})
          .map(() => (
            <div
              className="col col-span-1"
              key={new Date().getTime() + Math.random()}
            />
          ))}
      </div>
    </div>
  )
}

export default DevGrid
