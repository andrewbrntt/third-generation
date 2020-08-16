import React from 'react'
import shortId from 'shortid'

const VendorSection = ({ vendors = [] }) => {
  return (
    <div className='vendor-section__container'>
      {vendors.map((vendor) => {
        return (
          <div key={shortId.generate()} className='vendor-section__badge-container'>
            <picture>
              <source media='(min-width:992px)' srcSet={vendor.logo.large}/>
              <source media='(min-width:768px)' srcSet={vendor.logo.medium}/>
              <img src={vendor.logo.small} alt={vendor.altText} className={vendor.styleClasses}/>
            </picture>
          </div>
        )
      })}
    </div>
  )
}

export default VendorSection
