import React from 'react'
import shortId from 'shortid'
import Review from './Review'

const ReviewList = ({ reviewsList = [], randomCount = 0 }) => {

  const randomReviewNumber = _ => {
    return (Math.random() * 5)
  }

const createRandomReview = _ => {
  return {
    name: 'Andrew',
    score: randomReviewNumber(),
    location: 'BFE Anywhere',
    comment: 'Interactively disintermediate process-centric users through clicks-and-mortar bandwidth. Holisticly expedite team building solutions via clicks-and-mortar infomediaries. Compellingly evisculate excellent e-tailers before open-source services. Intrinsicly synergize functional.'
  }
}

const createRandomReviewList = (amount) => {
    let list = []

    for (let i=0; i < amount; i++) {
      list.push(createRandomReview())
    }

    return list
}

const currentReviewList = randomCount > 0 ? createRandomReviewList(randomCount) : reviewsList

  return (
    <div className='reviews-list__container'>
      {currentReviewList.map(currentReview =>
        <div key={shortId.generate()} className='review-list__review--spacing'>
          <Review review={currentReview}/>
        </div>
      )}
    </div>
  )
}

export default ReviewList
