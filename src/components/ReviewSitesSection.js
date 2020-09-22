import React from 'react'
import google from '../assets/review-sites/google/google-thunb.png'
import google2x from '../assets/review-sites/google/google-thunb@2x.png'
import angiesList from '../assets/review-sites/angies-list/angies-list-thumb.png'
import angiesList2x from '../assets/review-sites/angies-list/angies-list-thumb@2x.png'
import homeAdvisor from '../assets/review-sites/home-advisor/home-advisor-thumb.png'
import homeAdvisor2x from '../assets/review-sites/home-advisor/home-advisor-thumb@2x.png'

const ReviewSitesSection = () => {
  return (
    <div className='review-sites-section__container'>
      <div className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions'>
          <picture>
            <source media='(min-width:768px)' srcSet={angiesList2x}/>
            <img src={angiesList} alt='' className='review-sites-section__icon--dimensions' aria-hidden='true'/>
          </picture>
        </div>
        <span className='review-sites-section__card-text'>
          Angie's List
        </span>
      </div>
      <div className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions'>
          <picture>
            <source media='(min-width:768px)' srcSet={homeAdvisor2x}/>
            <img src={homeAdvisor} alt='' className='review-sites-section__icon--dimensions' aria-hidden='true'/>
          </picture>
        </div>
        <span className='review-sites-section__card-text'>
          Home Advisor
        </span>
      </div>
      <div className='review-sites-section__card'>
        <div className='review-sites-section__icon-container--dimensions'>
          <picture>
            <source media='(min-width:768px)' srcSet={google2x}/>
            <img src={google} className='review-sites-section__icon--dimensions' alt='' aria-hidden='true'/>
          </picture>
        </div>
        <span className='review-sites-section__card-text'>
          Google
        </span>
      </div>
    </div>
  )
}

export default ReviewSitesSection
