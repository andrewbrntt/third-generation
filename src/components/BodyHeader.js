import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import useElementDimensions from '../helpers/useElementDimensions'
import ThemeButton from './ThemeButton'
import backgroundImage from '../assets/mobile-wide-kitchen-stock.jpg'
import HeroImageOverlay from './HeroImageOverlay'

const BodyHeader = () => {

  let bodyHeader = useRef(null)
  let overlayContainer = useRef(null)
  let overlayDimensions = useElementDimensions(overlayContainer)

  const [height, setHeight] = useState(0)

let dimensions = {
    height: `${(height + 40)/16}rem`
}

  useLayoutEffect(() => {
    if (height) {
      dimensions = {height: `${(overlayDimensions.height + 40)/16}rem`}
      setHeight(overlayDimensions.height)
    } else {
      dimensions = {height: `${(overlayContainer.current.offsetHeight + 40)/16}rem`}
      setHeight(overlayContainer.current.offsetHeight)
    }
  }, [overlayDimensions])

  return (
    <section style={dimensions} ref={bodyHeader} className='body-header-container body-header__background-hero-img--overflow'>
      <img className='body-header__background-hero-img' aria-hidden='true' src={backgroundImage}/>
      <HeroImageOverlay elementRef={overlayContainer} styleClasses='w3-display-middle'/>
    </section>
  )
}

export default BodyHeader
