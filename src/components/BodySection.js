import React from 'react'
import ThemeButton from './ThemeButton'
import PageHeader from './PageHeader'
import IconWithLine from './IconWithLine'

const BodySection = ({ sectionTitle, children, styleClasses, paddingXRem, buttonText, pageHeader, iconName }) => {
  const styles = {
    paddingRight: `${paddingXRem}rem`,
    paddingLeft: `${paddingXRem}rem`,
    paddingTop: `${pageHeader && 0}`
  }

  return (
    <>
      {pageHeader && <PageHeader header={pageHeader}/>}
      <section style={styles}
               className={`${pageHeader ? 'remove-padding-top' : ''} body-section default-text ${styleClasses ? styleClasses : ''}`}>
        {iconName && <IconWithLine icon={iconName} />}
        {sectionTitle && <h2 className='body-section__title'>{sectionTitle}</h2>}
        {children}
        {buttonText && <div className='body-section__button-container--spacing'>
            <ThemeButton text={buttonText}/>
          </div>}
      </section>
    </>
  )
}

export default BodySection
