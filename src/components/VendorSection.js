import React from 'react'
import shortId from 'shortid'

const VendorSection = ({ vendors = [] }) => {
  return (
    <div className='vendor-section__container'>
      {vendors.map((vendor) => {
        return (
          <div key={shortId.generate()} className='vendor-section__badge-container'>
            <img
                 src={vendor.logo}
                 alt={vendor.altText}
                 className={vendor.styleClasses}
            />
          </div>
        )
      })}
    </div>
  )
}

export default VendorSection
