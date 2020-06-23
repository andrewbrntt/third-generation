import React from 'react'
import ThemeButton from './ThemeButton'

const HeroImageOverlay = ({ elementRef, styleClasses }) => {
  return (
    <div ref={elementRef} className={`hero-image-overlay__container ${styleClasses}`}>
      <h1 className='hero-image-overlay__h1 h1-page-header-text'>
        Transform Your House Into Your Dream Home
      </h1>
      <div className='hero-image-overlay__p-container default-text'>
      <p>
        A home's exterior is made to beautiful through its siding, trim, and roofing.
      </p>
      <p className='p--top-spacing'>
        A home's interior should reflect your style.
      </p>
      </div>
      <ThemeButton text='Contact Us'/>
    </div>
  )
}

export default HeroImageOverlay
