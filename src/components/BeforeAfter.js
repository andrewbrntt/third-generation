import React from 'react'

const BeforeAfter = ({ beforeSrc, afterSrc }) => {
  return (
    <>
      <div className='before-after__item'>
          <img className='before-after__img' src={beforeSrc}/>
            <p className='before-after__text'>Before</p>
      </div>
      <div className='before-after__item'>
          <img className='before-after__img' src={afterSrc}/>
            <p className='before-after__text'>After</p>
        </div>
    </>
  )
}

export default BeforeAfter
