import React from 'react'

const BeforeAfter = ({ before, after }) => {
  return (
    <>
      <div className='before-after__item'>
          <img className='before-after__img' src={before.src} alt={before.altText} />
            <span aria-hidden='true' className='before-after__text'>Before</span>
      </div>
      <div className='before-after__item'>
          <img className='before-after__img' src={after.src} alt={after.altText}/>
            <span aria-hidden='true' className='before-after__text'>After</span>
        </div>
    </>
  )
}

export default BeforeAfter
