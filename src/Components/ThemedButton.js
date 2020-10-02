import React from 'react'

const ThemedButton = ({ styleClasses, text }) => {
  return (
    <button className={`themed-button ${styleClasses || ''}`}>
      <div className='themed-button__hr-container'>
        {text}
        <hr className='themed-button__hr remove-margin'/>
      </div>
    </button>
  )
}

export default ThemedButton
