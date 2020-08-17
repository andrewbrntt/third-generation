import React from 'react'

const Modal = ({ children, styleClasses, modalId }) => {
  return (
    <div id={modalId} className={`w3-modal ${styleClasses || ''}`}>
      <div className='background-color-white'>
        {children}
      </div>
    </div>
  )
}

export default Modal
