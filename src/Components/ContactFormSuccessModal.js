import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


import BodySection from './BodySection'

const ContactFormSuccessModal = ({ isSuccessModalOpen, handleClose }) => {

  const successModal = useRef(null)

  useEffect(() => {
    if(isSuccessModalOpen) {
      disableBodyScroll(successModal.current, {reserveScrollBarGap: true})
    } else {
      enableBodyScroll(successModal.current)
    }

    return () => clearAllBodyScrollLocks()
      }, [isSuccessModalOpen])

  return (
    <div ref={successModal} className={`modal contact-form__success-modal color-primary ${isSuccessModalOpen ? 'modal__lg--display-flex' : 'modal--display-none'}`}>
      <div className='contact-form__success-modal-container background-color-white modal--height-100'>
      <div className='modal__close-btn-container'>
        <button className='modal__close-btn background-color-white' onClick={handleClose}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <BodySection sectionTitle='Thank You!'>
        <p className='padding-x-standard modal__subtext'>
          We have received your message and will be contacting you shortly.
        </p>
        <div className='contact-form__success-modal--padding-bottom-50'>
          <FontAwesomeIcon className='contact-form__success-modal-icon' icon={['far', 'check-circle']}/>
        </div>
        <div className='contact-form__success-modal-ul-container'>
        <ul className='contact-form__success-modal-ul remove-padding-left'>
          <li>
            <span className='contact-form__success-modal-text'>View</span>
            <Link to='/our-work' className='contact-form__success-modal-link'>Our Work</Link>
          </li>
          <li>
            <span className='contact-form__success-modal-text'>Read</span>
            <Link to='/reviews' className='contact-form__success-modal-link'>Reviews</Link>
          </li>
          <li>
            <span className='contact-form__success-modal-text'>Learn</span>
            <Link to='/about' className='contact-form__success-modal-link'>About Us</Link>
          </li>
        </ul>
        </div>
      </BodySection>
    </div>
    </div>
  )
}

export default ContactFormSuccessModal

