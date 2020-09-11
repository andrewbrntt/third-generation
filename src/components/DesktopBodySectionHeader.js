import React from 'react'
import DecorativeImage from './DecorativeImage'
import AboutImage from '../assets/group-people.jpg'
import ThemedLink from './ThemedLink'

const DesktopBodySectionHeader = () => {
  return (
    <section className='desktop-body-section__header-container'>
      <DecorativeImage className='desktop-body-section__hero-img' src={AboutImage}/>
      <div className='desktop-body-section__text-container'>
        <h1 className='desktop-body-section__header-text'>Remodel</h1>
        <p>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
        <div className='desktop-body-section__link-container'>
          <ThemedLink route='' text='Contact Us'/>
        </div>
      </div>

    </section>
  )
}

export default DesktopBodySectionHeader
