import React from 'react'
import { Image } from 'cloudinary-react'

const DynamicImage = ({ imageObject, styleClasses }) => {
  if (imageObject) {
    if (imageObject.cdn) {
      return (
        <>
          <img className={styleClasses}
               alt={imageObject.altText}
               src={imageObject.src}
          />
        </>
      )
    } else {
      return (
        <>
          <Image className={styleClasses}
                 cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
                 publicId={imageObject.src}
          />
        </>
      )
    }
  } else {
    return null
  }
}

export default DynamicImage
