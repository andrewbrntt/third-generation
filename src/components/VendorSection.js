import React from 'react'
import shortId from 'shortid'
import {getImageExtension} from '../helpers/vendorAssetLibrary'
import ExternalLink from './ExternalLink'

const VendorSection = ({ vendors = [] }) => {
  const getElementByType = (vendor) => {
    if (getImageExtension(vendor.logo.small) !== 'svg') {
      return (
        <picture>
          <source media='(min-width:992px)' srcSet={vendor.logo.large}/>
          <source media='(min-width:768px)' srcSet={vendor.logo.medium}/>
          <img src={vendor.logo.small} alt={vendor.altText} className={vendor.styleClasses}/>
        </picture>
      )
    } else {
      return (
          <img className={vendor.styleClasses} role='img' src={vendor.logo.small} alt={vendor.altText}/>
      )
    }
  }

  return (
    <div className='vendor-section__container'>
      {vendors.map((vendor) => {
        return (
          <div key={shortId.generate()} className='vendor-section__badge-container'>
            {getElementByType(vendor)}
          </div>
        )
      })}
    </div>
  )
}

export default VendorSection
