import React from 'react'
import { Link } from 'react-router-dom'
import IconWithLine from '../Components/IconWithLine'
import BodySection from '../Components/BodySection'
import Tools from '../assets/icon-tools-orange.svg'
import DecorativeImage from '../Components/DecorativeImage'

const Error = () => {
  return (
    <BodySection styleClasses='error__container'>
      <IconWithLine/>
      <h2>This page can't be found</h2>
      <DecorativeImage className='error-tools' src={Tools}/>
      <p>You may want to check out these pages instead:</p>
      <div className='error__ul-container'>
        <ul className='contact-form__success-modal-ul remove-padding-left'>
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
  )
}

export default Error
