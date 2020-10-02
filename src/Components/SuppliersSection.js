import React from 'react'
import shortId from 'shortid'

const SuppliersSection = ({ suppliers }) => {

  return (
    <div className='suppliers-section-container'>
      {suppliers.map((supplier) => {
        return (
          <div key={shortId.generate()} className='suppliers-section__img-container'>
            <picture>
              <source media='(min-width:992px)' srcSet={supplier.logo.large}/>
              <source media='(min-width:768px)' srcSet={supplier.logo.medium}/>
              <img src={supplier.logo.small} alt={supplier.altText} className={supplier.styleClasses}/>
            </picture>
          </div>
        )
      })}
    </div>
  )
}

export default SuppliersSection
