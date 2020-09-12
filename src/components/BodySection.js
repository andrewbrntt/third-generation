import React from 'react'
import ThemedLink from './ThemedLink'
import PageHeader from './PageHeader'
import IconWithLine from './IconWithLine'

const BodySection = ({ sectionTitle, children, styleClasses, pageHeader, iconName, linkText, linkRoute }) => {
  const styles = {
    paddingTop: `${pageHeader && 0}`
  }

  return (
    <>
      <div className='body-section--display'>
        {pageHeader && <PageHeader header={pageHeader}/>}
      </div>
        <section style={styles}
               className={`${pageHeader ? 'remove-padding-top' : ''} body-section default-text ${styleClasses || ''}`}>
        {iconName && <IconWithLine icon={iconName}/>}
        {sectionTitle && <h2 className='body-section__title'>{sectionTitle}</h2>}
        {children}
        {linkText &&
        <div className='body-section__link-container'>
          <ThemedLink route={linkRoute} text={linkText}/>
        </div>}
      </section>
    </>
  )
}

export default BodySection
