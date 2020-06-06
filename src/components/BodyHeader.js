import React from 'react'
import backgroundImage from '../assets/wide-kitchen-stock.jpg'
import ThemeButton from './ThemeButton'

const BodyHeader = () => {

  return (
    <section className='body-header__img--overflow'>
      <img className='' aria-hidden='true' src={backgroundImage}/>
      <div id='test' className='w3-display-middle body-header__text-overlay w3-content'>
        <h1 className='body-header__text'>
          Transform Your House Into Your Dream Home
        </h1>
        <p className='body-header__sub-text'>
          A home's exterior is made to beautiful through its siding, trim, and roofing.
        </p>
        <p className='body-header__sub-text'>
          A home's interior should reflect your style.
        </p>
    <span className=''>
            <ThemeButton/>
          </span>
      </div>
    </section>
  )
}

export default BodyHeader
