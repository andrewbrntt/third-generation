import React from 'react'
import { Link } from 'react-router-dom'

const LinkCard = ({ imgSrc, cardTitle, urlPath }) => {
  return (
    <Link to={`/${urlPath}`} className='w3-half link-card__container'>
      <div className='w3-card'>
        <img aria-hidden='true' alt='' className='w3-image link-card__img--dimensions' src={imgSrc}/>
          <p className='action-text remove-margin-top'>{cardTitle}</p>
      </div>
    </Link>
  )
}

export default LinkCard


// <div className='w3-card'>
//   <img className='link-card__img' src={imgSrc}/>
// <div className="w3-container w3-center">
//   <p className='
