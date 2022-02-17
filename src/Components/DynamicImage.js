import React from 'react'
import { Image } from 'cloudinary-react'
import {CDN_DEFS} from '../Helpers/GLOBAL_DEFS'

const DynamicImage = ({ imageObject, styleClasses }) => {
  if (imageObject) {
    // noinspection JSUnresolvedVariable
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
                 cloudName={CDN_DEFS.REACT_APP_CDN_CLOUD_NAME}
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
