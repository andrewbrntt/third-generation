import React from 'react'
import shortId from 'shortid'
import ExternalLink from './ExternalLink'
import { socialMediaRoutes } from '../DataObjects/routes'

const ReviewSitesSection = ({ reviewSites = [], containerStyleClasses }) => {

  const imageExtension = (imgName) => {
    return imgName.substr(imgName.length - 3)
  }

  const reviewSiteSvg = (site) => {
    return (
      <ExternalLink key={`review-sites-section_${shortId.generate()}`} routeTo={site.routeTo}>
          <img  className='review-sites__svg' role='img' src={site.imgDefault} alt={site.altText}/>
      </ExternalLink>
    )  }

  const reviewSiteImg = (site) => {
    return (
      <ExternalLink key={`review-sites-section_${shortId.generate()}`} routeTo={site.routeTo}>
        <picture>
          <source media='(min-width:992px)' srcSet={site.imgLarge}/>
          <source media='(min-width:768px)' srcSet={site.imgMedium}/>
          <img src={site.imgDefault} alt={site.altText}/>
        </picture>
      </ExternalLink>
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
