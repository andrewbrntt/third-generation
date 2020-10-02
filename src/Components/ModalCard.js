import React from 'react'

const ModalCard = ({ inputName, inputValue }) => {
  return (
    <div className='contact-form__review-modal-card-container'>
      <span className='action-text contact-form__review-modal-card-title'>{`${inputName}:`}</span>
      <span className='contact-form__review-modal-card-subtext'>{inputValue}</span>
    </div>
  )
}

export default ModalCard
