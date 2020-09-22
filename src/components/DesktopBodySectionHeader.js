import React from 'react'
import DecorativeImage from './DecorativeImage'
import ThemedLink from './ThemedLink'

const DesktopBodySectionHeader = ({ sectionTitle, children, heroImage, linkText, linkRoute }) => {
  return (
    <section className='desktop-body-section__header-container'>
      <DecorativeImage className='desktop-body-section__hero-img' src={heroImage}/>
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
