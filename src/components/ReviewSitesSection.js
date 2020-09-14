import React from 'react'
import shortId from 'shortid'

const ReviewSitesSection = ({ reviewSites = [], containerStyleClasses }) => {

  const imageExtension = (imgName) => {
    return imgName.substr(imgName.length - 3)
  }

  const reviewSiteSvg = (site) => {
    return (
          <img key={`review-sites-section_${shortId.generate()}`} className='review-sites__svg' role='img' src={site.imgDefault} alt={site.altText}/>
    )  }

  const reviewSiteImg = (site) => {
    return (
        <picture key={`review-sites-section_${shortId.generate()}`}>
          <source media='(min-width:992px)' srcSet={site.imgLarge}/>
          <source media='(min-width:768px)' srcSet={site.imgMedium}/>
          <img src={site.imgDefault} alt={site.altText}/>
        </picture>
    )
  }

  return (
    <div className={`review-sites-section__container review-sites__mobile-margin-bottom ${containerStyleClasses ? containerStyleClasses : ''}`}>
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
