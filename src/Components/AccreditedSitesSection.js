import React from 'react'
import shortId from 'shortid'
import LazyLoad from 'react-lazyload'
import { getImageExtension } from '../Helpers/vendorAssetLibrary'
import ExternalLink from './ExternalLink'

const AccreditedSitesSection = ({ accreditationSites = [], containerStyleClasses }) => {

  const accreditationSiteSvg = (site) => {
    return (
      <ExternalLink key={`accreditation-sites-section_${shortId.generate()}`} routeTo={site.routeTo}>
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
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
      /* eslint-disable-next-line jsx-a11y/no-redundant-roles */
      <img key={`accreditation-sites-section_${shortId.generate()}`} className='accreditation-sites__svg' role='img'
           src={site.imgDefault} alt={site.altText}/>
    )
  }

  const accreditationSiteImgNoLink = (site) => {
    return (
      <picture key={`accreditation-sites-section_${shortId.generate()}`}>
        <source media='(min-width:992px)' srcSet={site.imgLarge}/>
        <source media='(min-width:768px)' srcSet={site.imgMedium}/>
        <img src={site.imgDefault} alt={site.altText}/>
      </picture>
    )
  }

  return (
    <LazyLoad offset={400} once>
      <div
        className={`accreditation-sites-section__container ${containerStyleClasses ? containerStyleClasses : ''}`}>
        {
          accreditationSites.map(site => {
            if (site.noLink) {
              if (getImageExtension(site.imgDefault) !== 'svg') {
                return accreditationSiteImgNoLink(site)
              } else {
                return accreditationSiteSvgNoLink(site)
              }
            } else {
              if (getImageExtension(site.imgDefault) !== 'svg') {
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
