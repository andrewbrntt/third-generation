import React from 'react'

const ExternalLink = ({ children, routeTo, styleClasses }) => {
  return (
    <a className={styleClasses} rel='noopener noreferrer' target='_blank' href={routeTo}>
      {children}
    </a>
  )
}

export default ExternalLink
