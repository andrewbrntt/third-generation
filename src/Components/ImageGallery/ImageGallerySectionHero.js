import React from 'react'
import shortId from 'shortid'
import { Image } from 'cloudinary-react'

const ImageGallerySectionHero = ({heroImage, onImageClick}) => {
  if (heroImage) {
    return (
      <a className='image-gallery-section__hero-link' href='/' key={shortId.generate()}
         onClick={onImageClick}>
        <Image className='image-gallery-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
               publicId={heroImage.public_id}/>
      </a>
    )
  }
}

export default ImageGallerySectionHero
