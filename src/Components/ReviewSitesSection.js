import React from 'react'
import google from '../assets/google-icon.svg'
import angiesList from '../assets/review-sites/angies-list/angies-list-logo.png'
import angiesList2x from '../assets/review-sites/angies-list/angies-list-logo@2x.png'
import angiesList3x from '../assets/review-sites/angies-list/angies-list-logo@3x.png'
import homeAdvisor from '../assets/review-sites/home-advisor/home-advisor-logo.png'
import homeAdvisor2x from '../assets/review-sites/home-advisor/home-advisor-logo@2x.png'
import homeAdvisor3x from '../assets/review-sites/home-advisor/home-advisor-logo@3x.png'
import { socialMediaRoutes } from '../DataObjects/routes'

const ReviewSitesSection = () => {
  return (
    <div className='review-sites-section__container'>
      <a href={socialMediaRoutes.angies.routeTo} className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions'>
          <picture>
            <source media='(min-width:992px)' srcSet={angiesList3x}/>
            <source media='(min-width:768px)' srcSet={angiesList2x}/>
            <img src={angiesList} alt='' className='review-sites-section__icon--dimensions' aria-hidden='true'/>
          </picture>
        </div>
        <span className='review-sites-section__card-text'>
          {socialMediaRoutes.angies.routeName}
        </span>
      </a>
      <a href={socialMediaRoutes.homeAdvisor.routeTo} className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions review-sites-section__icon-container-home-advisor'>
          <picture>
            <source media='(min-width:992px)' srcSet={homeAdvisor3x}/>
            <source media='(min-width:768px)' srcSet={homeAdvisor2x}/>
            <img src={homeAdvisor} alt='' className='review-sites-section__icon--dimensions' aria-hidden='true'/>
          </picture>
        </div>
        <span className='review-sites-section__card-text'>
          {socialMediaRoutes.homeAdvisor.routeName}
        </span>
      </a>
      <a href={socialMediaRoutes.google.routeTo} className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions'>
            <img src={google} className='review-sites-section__icon--dimensions' alt='' aria-hidden='true'/>
        </div>
        <span className='review-sites-section__card-text'>
          {socialMediaRoutes.google.routeName}
        </span>
      </a>
    </div>
  )
}

export default ReviewSitesSection
