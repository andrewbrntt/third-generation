import React from 'react'

const BeforeAfter = ({ beforeSrc, afterSrc }) => {
  return (
    <div className='before-after__container'>
      <div className='w3-half before-after__img-container'>
          <img className='w3-image before-after__img-container' src={beforeSrc}/>
          <div className='w3-center'>
            <p className='remove-margin'>Before</p>
        </div>
      </div>
      <div className='w3-half before-after__img-container'>
          <img className='w3-image before-after__img-container' src={afterSrc}/>
          <div className='w3-center'>
            <p className='remove-margin'>After</p>
          </div>
        </div>
    </div>
  )
}

export default BeforeAfter
