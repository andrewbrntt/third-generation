import React from 'react'

//TODO: The text in this banner does not meet wcag color contrast requirements
// because the text is not big enough to be considered "large" 24px so it needs 4.5:1 ratio
const Banner = () => {
  return (
    <section role='banner' className='background-color-secondary banner'>
      <span className='remove-margin banner-text'>
        24-Hour Emergency Service
      </span>
    </section>
  )
}

export default Banner
