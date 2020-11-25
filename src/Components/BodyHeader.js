import React, { useLayoutEffect, useRef, useState } from 'react'
import useElementDimensions from '../Helpers/useElementDimensions'
import HeroImageOverlay from './HeroImageOverlay'
import { useImagesCDNSingleStockArt } from '../Helpers/ImageCDN/useImageCDN'
import DynamicImage from '../Components/DynamicImage'

// TODO: This seems to be re-rendering like 6 times on load and I need to figure out why
const BodyHeader = ({ linkRoute, linkText, pageHeader, children, heroImageName }) => {

  const [heroImage, setHeroImage] = useState({})

  const overlayContainer = useRef(null)
  const overlayDimensions = useElementDimensions(overlayContainer)

  const [elementHeight, setElementHeight] = useState(0)

  useImagesCDNSingleStockArt(setHeroImage, heroImageName, true)


  useLayoutEffect(() => {
    if (overlayDimensions.height) {
      setElementHeight(overlayDimensions.height)
    } else {
      setElementHeight(overlayContainer.current.offsetHeight)
    }
  }, [overlayDimensions])

  return (
    <section style={window.innerWidth < 992 ? { height: `${(elementHeight + 40) / 16}rem` } : { height: '47.5625rem' }}
             className='body-header-container'>
        <DynamicImage styleClasses='body-header__background-hero-img' imageObject={heroImage}/>
      {heroImage && <HeroImageOverlay elementRef={overlayContainer} styleClasses='display-middle' linkRoute={linkRoute} linkText={linkText}
                        pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>}
    </section>
  )
}

export default BodyHeader
