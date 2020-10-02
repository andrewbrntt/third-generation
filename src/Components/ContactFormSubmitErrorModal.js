import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import BodySection from './BodySection'
import ContactPhoneLink from './ContactPhoneLink'

const ContactFormSubmitErrorModal = ({ isErrorModalOpen, handleClose }) => {
  const errorModal = useRef(null)

  useEffect(() => {
    if (isErrorModalOpen) {
      disableBodyScroll(errorModal.current, { reserveScrollBarGap: true })
    } else {
      enableBodyScroll(errorModal.current)
    }

    return () => clearAllBodyScrollLocks()
  }, [isErrorModalOpen])

  return (
    <div ref={errorModal}
         className={`modal contact-form__success-modal color-primary ${isErrorModalOpen ? 'modal__lg--display-flex' : 'modal--display-none'}`}>
      <div className='contact-form__success-modal-container background-color-white modal--height-100'>
        <div className='modal__close-btn-container'>
          <button className='modal__close-btn background-color-white' onClick={handleClose}>
            <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
          </button>
        </div>
        <BodySection styleClasses='color-red' sectionTitle='Sorry'>
          <div className='contact-form__success-modal--padding-bottom-50'>
            <FontAwesomeIcon className='contact-form__error-modal-icon color-red' icon={['far', 'times-circle']}/>
          </div>
          <p className='padding-x-standard modal__subtext'>
            There seems to have been a error sending your message.
            <span className='p--top-spacing modal--display-block'>
            Please try again later or give us a call at <ContactPhoneLink className='color-primary contact-form__phone-link' />
          </span>
          </p>
          <div className='contact-form__success-modal-ul-container'>
            <ul className='contact-form__success-modal-ul remove-padding-left color-primary'>
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

export default ContactFormSubmitErrorModal

