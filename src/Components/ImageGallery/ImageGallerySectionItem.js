import React from 'react'
import shortId from 'shortid'
import DynamicImage from '../DynamicImage'

const ImageGallerySectionItem = ({ imageObject, index, onImageClick }) => {
  // TODO: I need to figure out why this is rendering twice
  return (
    <a
      className={`${index % 3 === 1 ? 'image-gallery-section__img-link-margin-x' : ''} image-gallery-section__img-link`}
      href='#' key={shortId.generate()} onClick={onImageClick}>
      <DynamicImage imageObject={imageObject}/>
    </a>
  )
}

export default ImageGallerySectionItem
