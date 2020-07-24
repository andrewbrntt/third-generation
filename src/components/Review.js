import React from 'react'
import shortId from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review = ({ review }) => {

  const calculateReviewScore = () => {
    const starLimit = 5

    let reviewStars = []

    let scoreCount = Math.floor(review.score)

    for (let i = 1; i <= starLimit; i++) {
      if (scoreCount > 0 && scoreCount % 1 === 0) {
        reviewStars.push(
          <span key={`review-star__${shortId.generate()}`}>
            <FontAwesomeIcon
              className='color-secondary review__star'
              icon={['fas', 'star']}
            />
          </span>)
      } else if (scoreCount === 0 && review.score % 1 !== 0 && reviewStars.length < starLimit) {
        reviewStars.push(
          <span key={`review-star__${shortId.generate()}`}>
            <FontAwesomeIcon
              className='color-secondary review__star'
              icon={'star-half-alt'}
            />
          </span>)
      } else {
        reviewStars.push(
          <span key={`review-star__${shortId.generate()}`}>
            <FontAwesomeIcon
              className='color-secondary review__star'
              icon={['far', 'star']}
            />
          </span>)
      }
      scoreCount--
    }
    return reviewStars
  }

  return (
    <div className={`review__container ${review.styleClasses ||''}`}>
      <figure role='img' className='review__star-container'
              aria-label={`Rated ${review.score.toFixed(1)} stars out of 5`}>
        {calculateReviewScore()}
      </figure>
      <div className='w3-left-align review__details-container default-text'>
        <p className='review__name'>{review.name}</p>
        <p className='review__location'>{review.location}</p>
        <p className='review__comment'>
          {review.comment}
        </p>
      </div>
    </div>
  )
}

export default Review
