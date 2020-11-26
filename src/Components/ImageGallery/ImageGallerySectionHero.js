import React from 'react'
import shortId from 'shortid'
import DynamicImage from '../DynamicImage'

const ImageGallerySectionHero = ({ heroImage, onImageClick }) => {
  if (heroImage) {
    return (
      <a className='image-gallery-section__hero-link' href='/' key={shortId.generate()}
         onClick={onImageClick}>
        <DynamicImage styleClasses='image-gallery-section__hero-img' imageObject={heroImage}/>
      </a>
    )
  }
}

export default ImageGallerySectionHero
