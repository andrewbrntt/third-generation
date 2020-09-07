import React from 'react'
import shortId from 'shortid'

const BeforeAfter = ({ before, after }) => {

  const imageId = shortId.generate()

  return (
    <>
      <div className='before-after__item'>
          <img id={`before-image-${imageId}`} className='before-after__img' src={before.src} alt={before.altText} />
            <label aria-hidden='true' htmlFor={`before-image-${imageId}`} className='before-after__text'>Before</label>
      </div>
      <div className='before-after__item'>
          <img id={`after-image-${imageId}`} className='before-after__img' src={after.src} alt={after.altText}/>
            <label aria-hidden='true' htmlFor={`after-image-${imageId}`} className='before-after__text'>After</label>
        </div>
    </>
  )
}

export default BeforeAfter
