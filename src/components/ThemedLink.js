import React from 'react'
import { NavLink } from 'react-router-dom'

const ThemedLink = ({ linkType, href, styleClasses, text }) => {
  return (
    <>
      {linkType === 'nav' &&
      <NavLink className={styleClasses} to={href}>Contact</NavLink>
      }
    </>
  )
}

export default ThemedLink
