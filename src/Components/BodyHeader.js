import React, { useLayoutEffect, useRef, useState } from 'react'
import useElementDimensions from '../Helpers/useElementDimensions'
import HeroImageOverlay from './HeroImageOverlay'
import DynamicImage from '../Components/DynamicImage'
import getStockArtImage from '../Helpers/ImageCDN/getStockArtImage'

// TODO: This seems to be re-rendering like 6 times on load and I need to figure out why
const BodyHeader = ({ linkRoute, linkText, pageHeader, children, heroImageName, showButtonTwo }) => {

  const [heroImage, setHeroImage] = useState(null)

  const overlayContainer = useRef(null)
  const overlayDimensions = useElementDimensions(overlayContainer)

  const [elementHeight, setElementHeight] = useState(0)

  useLayoutEffect(() => {
    if (!heroImage) {
      getStockArtImage(heroImageName, true).then(image => {
        setHeroImage(image)
        if (overlayDimensions.height) {
          setElementHeight(overlayDimensions.height)
        } else {
          // noinspection JSUnresolvedVariable
          setElementHeight(overlayContainer.current.offsetHeight)
        }
      })
    }
  }, [overlayDimensions, heroImage, heroImageName])

  return (
    <section style={window.innerWidth < 992 ? { height: `${(elementHeight + 40) / 16}rem` } : { height: '47.5625rem' }}
             className='body-header-container'>
      {heroImage && <DynamicImage styleClasses='body-header__background-hero-img' imageObject={heroImage}/>}
      {heroImage && <HeroImageOverlay elementRef={overlayContainer} styleClasses='display-middle' linkRoute={linkRoute}
                                      linkText={linkText}
                                      pageHeader={pageHeader}
                                      showButtonTwo={showButtonTwo}
      >
        {children}
      </HeroImageOverlay>}
    </section>
  )
}

export default BodyHeader
