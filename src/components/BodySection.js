import React from 'react'
import ThemedLink from './ThemedLink'
import PageHeader from './PageHeader'
import IconWithLine from './IconWithLine'

const BodySection = ({ sectionTitle, children, styleClasses, paddingXRem, pageHeader, iconName, linkText, linkRoute }) => {
  const styles = {
    paddingRight: `${paddingXRem}rem`,
    paddingLeft: `${paddingXRem}rem`,
    paddingTop: `${pageHeader && 0}`
  }

  return (
    <>
      {pageHeader && <PageHeader header={pageHeader}/>}
      <section style={styles}
               className={`${pageHeader ? 'remove-padding-top' : ''} body-section default-text ${styleClasses || ''}`}>
        {iconName && <IconWithLine icon={iconName} />}
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
