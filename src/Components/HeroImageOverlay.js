import React from 'react'
import ThemedLink from './ThemedLink'

const HeroImageOverlay = ({ elementRef, styleClasses, pageHeader, children, linkText, linkRoute, showButtonTwo }) => {
  return (
    <div ref={elementRef} className={`hero-image-overlay__container ${styleClasses}`}>
      <h1 className='hero-image-overlay__h1--margin'>
        {pageHeader}
      </h1>
      <div className='hero-image-overlay__children-container default-text'>
        {children}
      </div>
      <div className="body-section__link-container" style={{ justifyContent: showButtonTwo ? "space-evenly" : "center"}}>
        <ThemedLink route={linkRoute} text={linkText}/>
        { showButtonTwo && <ThemedLink route="/our-work" text="View Gallery" /> }
      </div>
    </div>
  )
}

export default HeroImageOverlay
