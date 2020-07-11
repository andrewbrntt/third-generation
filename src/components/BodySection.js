import React from 'react'

const BodySection = ({ title, children, styleClasses, paddingXRem }) => {
  const paddingX = {paddingRight: `${paddingXRem}rem`, paddingLeft: `${paddingXRem}rem`}

  return (
    <section style={paddingX} className={`body-section default-text ${styleClasses}`}>
      <h2 className='body-section__title'>{title}</h2>
        {children}
    </section>
  )
}

export default BodySection
