import React from 'react'

const LinkCard = ({ imgSrc, cardTitle }) => {
  return (
    <div className='w3-card'>
      <img className='link-card__img' src={imgSrc}/>
      <div className="w3-container w3-center">
        <h3 className='action-text'>{cardTitle}</h3>
      </div>
    </div>
  )
}

export default LinkCard
