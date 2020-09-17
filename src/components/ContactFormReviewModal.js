import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BodySection from './BodySection'
import shortId from 'shortid'
import ModalCard from './ModalCard'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const ContactFormReviewModal = ({ formInputData, isReviewModalOpen, handleSubmit, handleClose }) => {

  const reviewModal = useRef(null)

  useEffect(() => {
    if(isReviewModalOpen) {
      console.log(reviewModal.current)

      disableBodyScroll(reviewModal.current)
    } else {
      enableBodyScroll(reviewModal.current)
    }

    return () => clearAllBodyScrollLocks()
  }, [isReviewModalOpen])

  return (
    <div ref={reviewModal} className={`modal contact-form__review-modal color-primary ${isReviewModalOpen ? 'modal__lg--display-flex' : 'modal--display-none'}`}>
      <div className='contact-form__review-modal-container background-color-white'>
      <div className='modal__close-btn-container'>
        <button className='modal__close-btn background-color-white' onClick={handleClose}>
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
          <button className='contact-form__btn' onClick={handleSubmit}>Submit</button>
        </section>
      </BodySection>
    </div>
    </div>
  )
}

export default ContactFormReviewModal
