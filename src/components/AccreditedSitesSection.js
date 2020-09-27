import React from 'react'
import shortId from 'shortid'
import LazyLoad from 'react-lazyload'

import ExternalLink from './ExternalLink'

const AccreditedSitesSection = ({ accreditationSites = [], containerStyleClasses }) => {

  const imageExtension = (imgName) => {
    return imgName.substr(imgName.length - 3)
  }

  const accreditationSiteSvg = (site) => {
    return (
      <ExternalLink key={`accreditation-sites-section_${shortId.generate()}`} routeTo={site.routeTo}>
        <img className='accreditation-sites__svg' role='img' src={site.imgDefault} alt={site.altText}/>
      </ExternalLink>
    )
  }

  const accreditationSiteImg = (site) => {
    return (
      <ExternalLink key={`accreditation-sites-section_${shortId.generate()}`} routeTo={site.routeTo}>
        <picture>
          <source media='(min-width:992px)' srcSet={site.imgLarge}/>
          <source media='(min-width:768px)' srcSet={site.imgMedium}/>
          <img src={site.imgDefault} alt={site.altText}/>
        </picture>
      </ExternalLink>
    )
  }

  const accreditationSiteSvgNoLink = (site) => {
    return (
        <img className='accreditation-sites__svg' role='img' src={site.imgDefault} alt={site.altText}/>
    )
  }

  const accreditationSiteImgNoLink = (site) => {
    return (
        <picture>
          <source media='(min-width:992px)' srcSet={site.imgLarge}/>
          <source media='(min-width:768px)' srcSet={site.imgMedium}/>
          <img src={site.imgDefault} alt={site.altText}/>
        </picture>
    )
  }

  return (
    <LazyLoad once>
    <div
      className={`accreditation-sites-section__container ${containerStyleClasses ? containerStyleClasses : ''}`}>
      {
        accreditationSites.map(site => {
          if(site.noLink) {
            if (imageExtension(site.imgDefault) !== 'svg') {
              return accreditationSiteImgNoLink(site)
            } else {
              return accreditationSiteSvgNoLink(site)
            }
          } else {
            if (imageExtension(site.imgDefault) !== 'svg') {
              return accreditationSiteImg(site)
            } else {
              return accreditationSiteSvg(site)
            }
          }

        })
      }
    </div>
    </LazyLoad>
  )
}

export default AccreditedSitesSection
