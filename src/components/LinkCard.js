import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'cloudinary-react'

const LinkCard = ({ imgSrc, cardTitle, urlPath }) => {
  return (
    <>
      <Link to={`/${urlPath}`} className='link-card__container'>
        <Image alt='' aria-hidden='true' className='link-card__image' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME}
               publicId={imgSrc.public_id}/>
        <span className='link-card__title'>{cardTitle}</span>
      </Link>
    </>
  )
}

export default LinkCard

// box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
