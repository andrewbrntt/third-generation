import React from 'react'
import shortId from 'shortid'

const ReviewSitesSection = ({ reviewSites = [] }) => {
  return (
    <div className='review-sites-section__container'>
      {
        reviewSites.map(site => {
          return (
            <div key={`review-sites-section_${shortId.generate()}`} className='review-sites-section__badge-container'>
              <img role='img' src={site.img} alt={site.altText}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ReviewSitesSection
