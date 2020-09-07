import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageGalleryArrow = ({styleClasses, icon}) => {
  return (
    <span className={`fa-layers fa-fw ${styleClasses || ''}`}>
          <FontAwesomeIcon
            className='color-white image-gallery__arrow-circle-background-icon'
            icon={['fa', 'circle']}
          />
      <FontAwesomeIcon
        className='color-secondary image-gallery__arrow-circle-icon'
        icon={icon}
      />
        </span>
  )
}

export default ImageGalleryArrow
