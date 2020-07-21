import React from 'react'

const ThemeButton = ({ styleClasses, text }) => {
  return (
    <button className={`theme-button action-text ${styleClasses && styleClasses}`}>
      {text}
      <span className='theme-button__hr-container'>
      <hr className='theme-button__hr remove-margin'/>
      </span>
    </button>
  )
}

export default ThemeButton
