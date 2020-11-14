import React from 'react'
import { Image } from 'cloudinary-react'

const ImageGalleryImage = ({ imageObject }) => {

  if (imageObject.cdn) {
    return (
      <>
        <img alt={imageObject.altText} className='image-gallery__thumbnail-img' src={imageObject.src}/>
      </>
    )
  } else {
    return (
      <>
        <Image className='image-gallery__thumbnail-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
               publicId={imageObject.src}/>
      </>
    )
  }
}

export default ImageGalleryImage
