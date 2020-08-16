import React, {forwardRef} from 'react'

const Modal = ({ children, styleClasses, modalId }, myRef) => {
  return (
    <div ref={myRef} id={modalId} className={`w3-modal ${styleClasses || ''}`}>
      <div className="w3-modal-content">
        {children}
      </div>
    </div>
  )
}

export default forwardRef(Modal)
