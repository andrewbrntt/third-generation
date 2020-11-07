import React from 'react'
import shortId from 'shortid'
import { Image } from 'cloudinary-react'

const GallerySectionItem = ({imageObject, index, onImageClick}) => {
  // TODO: I need to figure out why this is rendering twice
  return (
    <a
      className={`${index % 3 === 1 ? 'image-gallery-section__img-link-margin-x' : ''} image-gallery-section__img-link`}
      href='#' key={shortId.generate()} onClick={onImageClick}>
      <Image className='image-gallery__thumbnail-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
             publicId={imageObject.public_id}/>
    </a>
  )
}

export default GallerySectionItem
