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

  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (overlayDimensions.height) {
      setHeight(overlayDimensions.height)
    } else {
      setHeight(overlayContainer.current.offsetHeight)
    }
  }, [overlayDimensions])

  return (
    <section style={{ height: `${(height + 40) / 16}rem` }}
             className='body-header-container body-header__background-hero-img--overflow'>
      <div className='body-header__picture-container'>
        <picture>
          <source media='(min-width:992px)' srcSet={bgData.large}/>
          <source media='(min-width:768px)' srcSet={bgData.medium}/>
          <img src={bgData.small} alt='' aria-hidden='true' className='body-header__background-hero-img'/>
        </picture>
      </div>
      <HeroImageOverlay elementRef={overlayContainer}
                        styleClasses='w3-display-middle'
                        linkText={linkText}
                        linkRoute={linkRoute}
                        pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>
    </section>
  )
}

export default BodyHeader
