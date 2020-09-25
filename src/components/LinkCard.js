import React from 'react'
import { Link } from 'react-router-dom'
import DecorativeImage from './DecorativeImage'
import { Image } from 'cloudinary-react'

const LinkCard = ({ imgSrc, cardTitle, urlPath }) => {
  return (
    <Link to={`/${urlPath}`} className='w3-half link-card__container'>
      <div className='w3-card'>
        <Image  alt='' aria-hidden='true' className='w3-image link-card__img--dimensions' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={imgSrc.public_id}/>
          <span className='action-text remove-margin-top'>{cardTitle}</span>
      </div>
    </Link>
  )
}

export default LinkCard
