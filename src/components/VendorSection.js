import React from 'react'
import shortId from 'shortid'


const VendorSection = ({ vendors = [] }) => {
  return (
    <div className='vendor-section__container'>
      {
        vendors.map(vendor => {
          return (
            <span key={`vendor-section_${shortId.generate()}`} className='vendor-section__badge-container'>
              <img src={vendor.img} alt={vendor.altText}/>
            </span>
          )
        })
      }
    </div>
  )
}

export default VendorSection
