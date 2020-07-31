import React, { useState } from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BodySection from './BodySection'
import shortId from 'shortid'
import ModalCard from './ModalCard'

const ContactFormModal = ({ formInputData, isModalOpen, handleSubmit, handleClose }) => {

  return (
    <Modal styleClasses={`contact-form__modal color-primary ${isModalOpen ? 'contact-form-modal--display-block' : 'contact-form-modal--display-none'}`}>
      <div className='padding-x-8 contact-form__modal-close-btn-container'>
        <button className='contact-form__modal-close-btn' onClick={handleClose}>
          <FontAwesomeIcon className='contact-form__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <BodySection paddingXRem='0.5' sectionTitle='Verify Info'>
        <span className='default-text'>Please ensure the information is correct before submitting</span>
        <ul className='contact-form__ul'>
          {formInputData.map(element => {
            return (
              <li key={shortId.generate()} className='contact-form__modal-card-container'>
                <ModalCard inputName={element.labelText} inputValue={element.value}/>
              </li>
            )
          })}
        </ul>
        <section className='contact-form__bottom-section'>
          <button className='contact-form__btn action-text' onClick={handleClose}>Edit</button>
          <button className='contact-form__btn action-text' onClick={handleSubmit}>Submit</button>
        </section>
      </BodySection>
    </Modal>
  )
}

export default ContactFormModal
