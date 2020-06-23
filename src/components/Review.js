import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review = () => {
  return (
    <>
        <FontAwesomeIcon className='color-secondary' size="3x" icon={['fas', 'star']}/>
        <FontAwesomeIcon className='color-secondary' size="3x" icon={['fas', 'star']}/>
        <FontAwesomeIcon className='color-secondary' size="3x" icon={['fas', 'star']}/>
        <FontAwesomeIcon className='color-secondary' size="3x" icon='star-half-alt'/>
        <FontAwesomeIcon className='color-secondary' size="3x" icon={['far', 'star']}/>
      <div className='w3-left-align'>
        <p className='review__name remove-margin'>Gordon R.</p>
        <p className='review__location remove-margin'>Lorain, OH</p>
        <p className='review__comment'>
          Ut nec maximus leo. Proin faucibus bibendum lacus vel aliquam. Proin pellentesque lobortis ultrices.
        </p>
      </div>
    </>
  )
}

export default Review
