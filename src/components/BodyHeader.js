import React, { useLayoutEffect, useRef, useState } from 'react'
import useElementDimensions from '../helpers/useElementDimensions'

import backgroundImage1x from '../assets/mobile-wide-kitchen-stock.jpg'
import backgroundImage2x from '../assets/white-kitchen-3-lrg.jpg'
import backgroundImage3x from '../assets/wide-kitchen-stock.jpg'
import HeroImageOverlay from './HeroImageOverlay'

const BodyHeader = ({ linkRoute, linkText, pageHeader, children }) => {

  const bgData = {
    small: backgroundImage1x,
    medium: backgroundImage2x,
    large: backgroundImage3x,
  }

  const overlayContainer = useRef(null)
  const overlayDimensions = useElementDimensions(overlayContainer)

  const [elementHeight, setElementHeight] = useState(0)

  useLayoutEffect(() => {
    if (overlayDimensions.height) {
      setElementHeight(overlayDimensions.height)
    } else {
      setElementHeight(overlayContainer.current.offsetHeight)
    }
  }, [overlayDimensions])

  return (
    <section style={window.innerWidth < 992 ? { height: `${(elementHeight + 40) / 16}rem` } : { height: '47.5625rem' }}
             className='body-header-container body-header__background-hero-img--overflow'>
      <picture>
        <source media='(min-width:992px)' srcSet={bgData.large}/>
        <source media='(min-width:768px)' srcSet={bgData.medium}/>
        <img src={bgData.small} alt='' aria-hidden='true' className='body-header__background-hero-img'/>
      </picture>
      <HeroImageOverlay elementRef={overlayContainer} styleClasses='display-middle' linkRoute={linkRoute} linkText={linkText}
                        pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>
    </section>
  )
}

export default BodyHeader
