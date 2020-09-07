import React from 'react'
import { Link } from 'react-router-dom'
import DecorativeImage from './DecorativeImage'

const LinkCard = ({ imgSrc, cardTitle, urlPath }) => {
  return (
    <Link to={`/${urlPath}`} className='w3-half link-card__container'>
      <div className='w3-card'>
        <DecorativeImage className='w3-image link-card__img--dimensions' src={imgSrc}/>
          <span className='action-text remove-margin-top'>{cardTitle}</span>
      </div>
    </Link>
  )
}

export default LinkCard
