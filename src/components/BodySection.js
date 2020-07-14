import React from 'react'
import ThemeButton from './ThemeButton'
import PageHeader from './PageHeader'

const BodySection = ({ title, children, styleClasses, paddingXRem, buttonText, pageHeader }) => {
  const paddingX = { paddingRight: `${paddingXRem}rem`, paddingLeft: `${paddingXRem}rem` }

  return (
    <>
      {pageHeader && <PageHeader header={pageHeader}/>}
      <section style={paddingX}
               className={`${pageHeader ? 'remove-padding-top' : ''} body-section default-text ${styleClasses ? styleClasses : ''}`}>
        {title && <h2 className='body-section__title'>{title}</h2>}
        {children}
        {!buttonText ? '' :
          <div className='body-section__button-container--spacing'>
            <ThemeButton text={buttonText}/>
          </div>}
      </section>
    </>
  )
}

export default BodySection
