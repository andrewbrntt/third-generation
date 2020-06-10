import React from 'react'

const BodySection = ({ title, children, styleClasses }) => {
  return (
    <section className={`w3-container body-section ${styleClasses}`}>
      <h2 className='body-section__title'>{title}</h2>
        {children}
    </section>
  )
}

export default BodySection
