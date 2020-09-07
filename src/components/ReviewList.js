import React from 'react'
import shortId from 'shortid'
import Review from './Review'

const ReviewList = ({ reviewsList = [], randomCount = 0 , styleClasses}) => {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


  const scoreOptions = [0.5, 0.3, 1, 0.9, 0.1]

const createRandomReview = _ => {
  return {
    name: 'Andrew',
    score: scoreOptions[getRandomInt(0, 4)],
    location: 'BFE Anywhere',
    comment: 'Interactively disintermediate process-centric users through clicks-and-mortar bandwidth. Holisticly expedite team building solutions via clicks-and-mortar infomediaries.',
    styleClasses: styleClasses
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
