import React from 'react'
import DecorativeImage from './DecorativeImage'
import ThemedLink from './ThemedLink'
import DynamicImage from './DynamicImage'

const DesktopBodySectionHeader = ({ sectionTitle, children, heroImage, linkText, linkRoute }) => {

  const selectHeroImageContainer = (image) => {
    if (image) {
      return (<DynamicImage styleClasses='desktop-body-section__hero-img' imageObject={image}/>)
    } else {
      return (<DecorativeImage className='desktop-body-section__hero-img' src={image}/>)
    }
  }

  return (
    <section className='desktop-body-section__header-container'>
      {selectHeroImageContainer(heroImage)}
      <div className='desktop-body-section__text-container'>
        <h1 className='desktop-body-section__header-text'>{sectionTitle}</h1>
        {children}
        <div className='desktop-body-section__link-container'>
          <ThemedLink route={linkRoute} text={linkText}/>
        </div>
      </div>

    </section>
  )
}

export default DesktopBodySectionHeader
