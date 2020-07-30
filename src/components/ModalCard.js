import React from 'react'

const ModalCard = ({inputName, inputValue }) => {
  return (
    <div className='w3-card modal-card__container'>
      <span className='action-text modal-card__title'>{inputName}</span>
      <span className='modal-card__subtext'>{inputValue}</span>
    </div>
  )
}

export default ModalCard
