import React from 'react'
import ThemedLink from './ThemedLink'
import PageHeader from './PageHeader'
import IconWithLine from './IconWithLine'

const BodySection = ({ sectionTitle, children, styleClasses, pageHeader, pageHeaderStyleClasses, iconName, linkText, linkRoute }) => {
  const styles = {
    paddingTop: `${pageHeader && 0}`
  }

  return (
    <>
      {pageHeader && <PageHeader styleClasses={pageHeaderStyleClasses} header={pageHeader}/>}
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
