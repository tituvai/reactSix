import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={`py-3 px-14 text-sm font-bold border-2 border-borderC hover:border-hoverC transition-all duration-700 ${className}`}>{btnText}</button>
  )
}

export default Button