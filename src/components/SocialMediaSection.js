import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaSection = () => {
  return (
    <div className='social-media-section__container'>
      <h2 className='color-white social-media-section__header-text remove-margin-top'>Follow Us On Social</h2>
      <div className='social-media-section__icon-container'>
        <FontAwesomeIcon
          className='color-white social-media-section__icon'
          icon={['fab', 'facebook']}
        />
        <span className='fa-layers fa-fw social-media-section__icon'>
          <FontAwesomeIcon
           className='color-white'
           icon={['fa', 'circle']}
           />
          <FontAwesomeIcon
            className='color-primary social-media__fa-instagram--size'
            icon={['fab', 'instagram']}
          />
        </span>
      </div>
    </div>
  )
}

export default SocialMediaSection
