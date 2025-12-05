import React from 'react'

const Card = ({ children, bg = 'bg-amber-100' }) => {
  return (
    <div
      className={`
        ${bg} 
        p-6 
        rounded-xl 
        shadow-lg 
        border border-amber-200
        hover:shadow-2xl 
        transition-shadow 
        duration-300
      `}
    >
      {children}
    </div>
  )
}

export default Card
