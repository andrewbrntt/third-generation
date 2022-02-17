import React from 'react'
import shortId from 'shortid'
import DynamicImage from '../DynamicImage'

const ImageGallerySectionItem = ({ imageObject, index, onImageClick }) => {
  // TODO: I need to figure out why this is rendering twice
  return (
    <button
      className={`${index % 3 === 1 ? 'image-gallery-section__img-link-margin-x' : ''} image-gallery-section__img-link image-gallery__item-button`}
      key={shortId.generate()} onClick={(e) => onImageClick(e, imageObject)}>
      <DynamicImage imageObject={imageObject}/>
    </button>
  )
}

export default ImageGallerySectionItem
