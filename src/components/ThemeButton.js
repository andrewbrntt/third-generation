import React from 'react'
import { Link } from 'react-router-dom'

const ThemeButton = ({ styleClasses, text }) => {
  return (
    <button className={`theme-button theme-button--focus ${styleClasses}`}>
      Contact Us
    </button>
  )
}

export default ThemeButton
