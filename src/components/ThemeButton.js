import React from 'react'
import { Link } from 'react-router-dom'

const ThemeButton = ({ styleClasses, text }) => {
  return (
    <button className={`theme-button action-text theme-button--focus ${styleClasses}`}>
      {text}
    </button>
  )
}

export default ThemeButton
