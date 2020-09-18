import React from 'react'
import shortId from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review = ({ review, styleClasses }) => {

  const calculateReviewStars = () => {
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

  const calculateAdjustedReviewScore = () => {
    if(review.score > 0 && review.score < 0.5) {
      return 0.5
    }

    return review.score.toFixed(1)
  }

  return (
    <div className={`review__container ${styleClasses ||''}`}>
      <figure role='img' className='review__star-container'
              aria-label={`Rated ${calculateAdjustedReviewScore(1)} stars out of 5`}>
        {calculateReviewStars()}
      </figure>
      <div className='review__details-container'>
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
