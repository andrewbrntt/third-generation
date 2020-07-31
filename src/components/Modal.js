import React from 'react'

const Modal = ({ children, styleClasses, isModalOpen }) => {
  return (
    <div id="id01" className={`w3-modal ${styleClasses || ''}`}>
      <div className="w3-modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal
