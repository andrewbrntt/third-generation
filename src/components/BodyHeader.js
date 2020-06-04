import React from 'react'
import backgroundImage from '../assets/wide-kitchen-stock.jpg'
import ThemeButton from './ThemeButton'

const BodyHeader = () => {
  return (
    <section className='w3-display-container'>
      <img aria-hidden='true' src={backgroundImage}/>
      <div className='body-header__text-overlay'>
        <h1 className='body-header__text'>
          Transform Your House Into Your Dream Home
        </h1>
        <p className='body-header__sub-text'>
          A home's exterior is made to beautiful through its siding, trim, and roofing. A home's interior should reflect your style.
        </p>
      </div>
      <span className='body-header__cta-button-container'>
        <ThemeButton />
      </span>
    </section>
  )
}

export default BodyHeader
