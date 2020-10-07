import React from 'react'
import { socialMediaRoutes } from '../DataObjects/routes'
import FBLogo from '../assets/facebook-3.svg'
import InstaLogo from '../assets/instagram-2-1.svg'
import BBBLogo from '../assets/better-business-bureau.svg'
import GoogleLogo from '../assets/google-icon.svg'
import ExternalLink from './ExternalLink'

const SocialMediaSection = () => {
  return (
    <div className='social-media-section__container'>
      <h2 className='color-white social-media-section__header-text remove-margin-top'>Follow Us On Social</h2>
      <div className='social-media-section__icon-container'>
        <ExternalLink routeTo={socialMediaRoutes.facebook.routeTo}>
          <img className='social-media-section__icon' alt='check us out on facebook' src={FBLogo}/>
        </ExternalLink>
        <ExternalLink routeTo={socialMediaRoutes.instagram.routeTo}>
          <img className='social-media-section__icon' alt='check us out on instagram' src={InstaLogo}/>
        </ExternalLink>
        <ExternalLink routeTo={socialMediaRoutes.google.routeTo}>
          <img className='social-media-section__icon' alt='check us out on google' src={GoogleLogo}/>
        </ExternalLink>
        <ExternalLink routeTo={socialMediaRoutes.bbb.routeTo}>
          <img className='social-media-section__icon' alt='check us out at the better business bureau' src={BBBLogo}/>
        </ExternalLink>
      </div>
    </div>
  )
}

export default SocialMediaSection
