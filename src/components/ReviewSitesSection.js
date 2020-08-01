import React from 'react'
import shortId from 'shortid'

const ReviewSitesSection = ({ reviewSites = [] }) => {

  const imageExtension = (imgName) => {
    return imgName.substr(imgName.length - 3)
  }

  return (
    <div className='review-sites-section__container'>
      <picture>
      {
        reviewSites.map(site => {
          return (
            <div key={`review-sites-section_${shortId.generate()}`} className='review-sites-section__badge-container'>
              <source media="(min-width:650px)" srcSet={site.imgLarge}/>
                <source media="(min-width:465px)" srcSet={site.imgMedium} />
              <img role={imageExtension(site.img) === 'svg' ? 'img' : ''} src={site.imgDefault} alt={site.altText}/>
            </div>
          )
        })
      }
      </picture>
    </div>
  )
}

export default ReviewSitesSection
