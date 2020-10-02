import React from 'react'

const ExternalLink = ({ children, routeTo }) => {
  return (
    <a rel='noopener noreferrer' target='_blank' href={routeTo}>
      {children}
    </a>
  )
}

export default ExternalLink
