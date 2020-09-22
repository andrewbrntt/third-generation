import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialMediaRoutes } from '../DataObjects/routes'
import ExternalLink from './ExternalLink'

const SocialMediaSection = () => {
  return (
    <div className='social-media-section__container'>
      <h2 className='color-white social-media-section__header-text remove-margin-top'>Follow Us On Social</h2>
      <div className='social-media-section__icon-container'>
        <ExternalLink routeTo={socialMediaRoutes.facebook.routeTo}>
          <FontAwesomeIcon
            className='color-white social-media-section__icon'
            icon={['fab', 'facebook']}
          />
        </ExternalLink>
        <ExternalLink routeTo={socialMediaRoutes.instagram.routeTo}>
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
        </ExternalLink>
      </div>
    </div>
  )
}

export default SocialMediaSection
