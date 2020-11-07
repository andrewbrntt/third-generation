import React, { useLayoutEffect, useRef, useState } from 'react'
import useElementDimensions from '../Helpers/useElementDimensions'
import HeroImageOverlay from './HeroImageOverlay'
import { Image } from 'cloudinary-react'
import { useImagesCDNSingleStockArt } from '../Helpers/useImageCDN'

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
        <Image alt='' className='body-header__background-hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={heroImage.public_id}/>
      {heroImage && <HeroImageOverlay elementRef={overlayContainer} styleClasses='display-middle' linkRoute={linkRoute} linkText={linkText}
                        pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>}
    </section>
  )
}

export default BodyHeader
