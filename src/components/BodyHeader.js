import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import useElementDimensions from '../helpers/useElementDimensions'
import HeroImageOverlay from './HeroImageOverlay'
import { Image } from 'cloudinary-react'
import { useImagesCDNSingleStockArt } from '../helpers/useImageCDN'

const BodyHeader = ({ linkRoute, linkText, pageHeader, children, heroImageName }) => {

  const [heroImage, setHeroImage] = useState({})

  const overlayContainer = useRef(null)
  const overlayDimensions = useElementDimensions(overlayContainer)

  const [elementHeight, setElementHeight] = useState(0)

  useImagesCDNSingleStockArt(setHeroImage,heroImageName)


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
        <Image  alt='' className='body-header__background-hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={heroImage.public_id}/>
      {heroImage && <HeroImageOverlay elementRef={overlayContainer} styleClasses='display-middle' linkRoute={linkRoute} linkText={linkText}
                        pageHeader={pageHeader}>
        {children}
      </HeroImageOverlay>}
    </section>
  )
}

export default BodyHeader
