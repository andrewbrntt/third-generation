import React from 'react'
import ThemedLink from './ThemedLink'

const HeroImageOverlay = ({ elementRef, styleClasses, pageHeader, children, linkText, linkRoute }) => {
  return (
    <div ref={elementRef} className={`hero-image-overlay__container ${styleClasses}`}>
      <h1 className='hero-image-overlay__h1--margin h1-page-header-text'>
        {pageHeader}
      </h1>
      <div className='hero-image-overlay__children-container default-text'>
        {children}
      </div>
      <div className='body-section__link-container'>
        <ThemedLink route={linkRoute} text={linkText}/>
      </div>
    </div>
  )
}

export default HeroImageOverlay
