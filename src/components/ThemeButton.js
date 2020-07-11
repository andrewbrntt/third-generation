import React from 'react'

const ThemeButton = ({ styleClasses, text }) => {
  return (
    <button className={`theme-button action-text ${styleClasses ? styleClasses : ''}`}>
      {text}
    </button>
  )
}

export default ThemeButton
