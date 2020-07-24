import React from 'react'
import ThemeButton from './ThemeButton'

const HeroImageOverlay = ({ elementRef, styleClasses, pageHeader, children, buttonText }) => {
  return (
    <div ref={elementRef} className={`hero-image-overlay__container ${styleClasses}`}>
      <h1 className='hero-image-overlay__h1 h1-page-header-text'>
        {pageHeader}
      </h1>
      <div className='hero-image-overlay__p-container default-text'>
        {children}
      </div>
      <ThemeButton text={buttonText}/>
    </div>
  )
}

export default HeroImageOverlay
