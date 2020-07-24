import React from 'react'
import shortId from 'shortid'

const VendorSection = ({ vendors = [] }) => {
  return (
    <div className='vendor-section__container'>
      {vendors.map((vendor, index) => {
        return (
          <div className='vendor-section__badge-container'>
            <img key={shortId.generate()}
                 src={vendor.logo}
                 alt={vendor.altText}
            />
          </div>
        )
      })}
    </div>
  )
}

export default VendorSection
