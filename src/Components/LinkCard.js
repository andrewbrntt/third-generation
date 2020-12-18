import React from 'react'
import { Link } from 'react-router-dom'
import DynamicImage from './DynamicImage'

const LinkCard = ({ imgSrc, cardTitle, urlPath }) => {
  return (
    <>
      <Link to={`/${urlPath}`} className='link-card__container'>
        <DynamicImage styleClasses='link-card__image' imageObject={imgSrc}/>
        <span className='link-card__title'>{cardTitle}</span>
      </Link>
    </>
  )
}

export default LinkCard
