import React from 'react'
import backgroundImage from '../assets/wide-kitchen-stock.jpg'
import ThemeButton from './ThemeButton'

const BodyHeader = () => {
  return (
    <section className='body__header-container'>
      <img aria-hidden='true' className='' alt='' src={backgroundImage}/>
      <div className='body-header__text-overlay'>
        <h1 className='body-header__text'>
          Transform Your House Into Your Dream Home
        </h1>
        <h2 className='body-header__sub-text'>
          A home’s exterior is made to be beautiful with its siding, trim, and roofing. The home’s interior is made to
          reflect you and be built to showcase your personal style.
        </h2>
      </div>
      <span className='body-header__cta-button-container'>
        <ThemeButton />
      </span>
    </section>
  )
}

export default BodyHeader
