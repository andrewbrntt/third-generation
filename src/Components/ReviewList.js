import React from 'react'
import shortId from 'shortid'
import Review from './Review'

const ReviewList = ({ reviewsList = [], reviewClasses, containerClasses }) => {

  return (
    <div className={`reviews-list__container ${containerClasses || ''}`}>
      {reviewsList.map(currentReview =>
        <div key={shortId.generate()} className='review-list__review review-list__review--spacing'>
          <Review styleClasses={reviewClasses} review={currentReview}/>
        </div>
      )}
    </div>
  )
}

export default ReviewList
