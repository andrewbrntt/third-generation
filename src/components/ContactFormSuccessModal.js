import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './Modal'
import BodySection from './BodySection'

const ContactFormSuccessModal = ({ isSuccessModalOpen, handleClose }) => {
  return (
    <Modal
      styleClasses={`modal-container contact-form__success-modal-container contact-form__success-modal--padding-bottom-75 color-primary 
      ${isSuccessModalOpen ? 'modal--display-block' : 'modal--display-none'}`}>
      <div className='modal__close-btn-container'>
        <button className='modal__close-btn' onClick={handleClose}>
          <FontAwesomeIcon className='modal__times-icon' icon={['fa', 'times']}/>
        </button>
      </div>
      <BodySection sectionTitle='Thank You!'>
        <p className='default-text padding-x-standard modal__subtext'>
          We have received your message. We will contact you within 1-3 business days.
        </p>
        <div className='contact-form__success-modal--padding-bottom-50'>
          <FontAwesomeIcon className='contact-form__success-modal-icon' icon={['far', 'check-circle']}/>
        </div>
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
      </BodySection>
    </Modal>
  )
}

export default ContactFormSuccessModal

