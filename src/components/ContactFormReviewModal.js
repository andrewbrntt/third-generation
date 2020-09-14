import React, { useEffect, useRef } from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BodySection from './BodySection'
import shortId from 'shortid'
import ModalCard from './ModalCard'

const ContactFormReviewModal = ({ formInputData, isModalOpen, handleSubmit, handleClose }) => {

  const modalCloseButtonRef = useRef(null)

  const handleSubmitButtonBlur = () => {
    modalCloseButtonRef.current.focus()
  }

  useEffect(() => {
    if(isModalOpen) {
      modalCloseButtonRef.current.focus()
    }
  }, [isModalOpen])

  return (
    <Modal
      styleClasses={`contact-form__review-modal color-primary 
      ${isModalOpen ? 'modal--display-block' : 'modal--display-none'}`}>
      <div className='modal__close-btn-container'>
        <button ref={modalCloseButtonRef} className='modal__close-btn background-color-white' onClick={handleClose}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <BodySection sectionTitle='Verify Info'>
        <p className='padding-x-standard'>Please ensure the information is correct before submitting</p>
        <ul className='contact-form__ul padding-x-standard'>
          {formInputData.map(element => {
            return (
              <li key={shortId.generate()}>
                <ModalCard inputName={element.labelText} inputValue={element.value}/>
              </li>
            )
          })}
        </ul>
        <section className='contact-form__bottom-section'>
          <button className='contact-form__btn' onClick={handleClose}>Edit</button>
          <button onBlur={handleSubmitButtonBlur} className='contact-form__btn' onClick={handleSubmit}>Submit</button>
        </section>
      </BodySection>
    </Modal>
  )
}

export default ContactFormReviewModal
