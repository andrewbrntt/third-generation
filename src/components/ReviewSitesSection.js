import React from 'react'
import shortId from 'shortid'

const ReviewSitesSection = ({ reviewSites = [] }) => {

  const imageExtension = (imgName) => {
    return imgName.substr(imgName.length - 3)
  }

  const reviewSiteSvg = (site) => {
    return (
      <div key={`review-sites-section_${shortId.generate()}`} className='review-sites-section__badge-container'>
          <img className='review-site-svg' role='img' src={site.imgDefault} alt={site.altText}/>
      </div>
    )  }

  const reviewSiteImg = (site) => {
    return (
      <div key={`review-sites-section_${shortId.generate()}`} className='review-sites-section__badge-container'>
        <picture>
          <source media='(min-width:992px)' srcSet={site.imgLarge}/>
          <source media='(min-width:768px)' srcSet={site.imgMedium}/>
          <img src={site.imgDefault} alt={site.altText}/>
        </picture>
      </div>
    )
  }

  return (
    <div className='review-sites-section__container'>
      {
        reviewSites.map(site => {
            if(imageExtension(site.imgDefault) !== 'svg') {
              return reviewSiteImg(site)
            } else {
              return reviewSiteSvg(site)
            }
        })
      }
    </div>
  )
}

export default ReviewSitesSection
