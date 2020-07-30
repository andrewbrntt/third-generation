import React from 'react'

const ThemedButton = ({ styleClasses, text }) => {
  return (
    <button className={`themed-button action-text ${styleClasses || ''}`}>
      {text}
      <span className='themed-button__hr-container'>
      <hr className='themed-button__hr remove-margin'/>
      </span>
    </button>
  )
}

export default ThemedButton
