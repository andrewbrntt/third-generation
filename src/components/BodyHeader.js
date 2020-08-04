import React, { useState, useRef, useLayoutEffect } from 'react'
import useElementDimensions from '../helpers/useElementDimensions'
import backgroundImage from '../assets/mobile-wide-kitchen-stock.jpg'
import HeroImageOverlay from './HeroImageOverlay'
import DecorativeImage from './DecorativeImage'

const BodyHeader = ({linkText, pageHeader, children}) => {

  const overlayContainer = useRef(null)
  const overlayDimensions = useElementDimensions(overlayContainer)



  

  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (overlayDimensions.height) {
      setHeight(overlayDimensions.height)
    } else {
      setHeight(overlayContainer.current.offsetHeight)
    }
  }, [overlayDimensions])

  return (
    <section style={{ height: `${(height + 40) / 16}rem` }} className='body-header-container body-header__background-hero-img--overflow'>
      <DecorativeImage className='body-header__background-hero-img' src={backgroundImage}/>
      <HeroImageOverlay elementRef={overlayContainer} styleClasses='w3-display-middle' linkText={linkText} pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>
    </section>
  )
}

export default BodyHeader
