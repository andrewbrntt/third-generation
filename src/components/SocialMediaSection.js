import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialMediaRoutes } from '../DataObjects/routes'
import FBLogo from '../assets/facebook-logo@logotyp.us.svg'
import InstaLogo from '../assets/instagram-logo@logotyp.us.svg'
import ExternalLink from './ExternalLink'

const SocialMediaSection = () => {
  return (
    <div className='social-media-section__container'>
      <h2 className='color-white social-media-section__header-text remove-margin-top'>Follow Us On Social</h2>
      <div className='social-media-section__icon-container'>
        <ExternalLink routeTo={socialMediaRoutes.facebook.routeTo}>
          <img className='social-media-section__icon' alt='check us out on facebook' src={FBLogo} />
        </ExternalLink>
        <ExternalLink routeTo={socialMediaRoutes.instagram.routeTo}>
          <img className='social-media-section__icon' alt='check us out on facebook' src={InstaLogo} />
        </ExternalLink>
      </div>
    </div>
  )
}

export default SocialMediaSection
