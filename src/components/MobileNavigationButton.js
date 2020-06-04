import React from 'react'
import HamburgerMenuIcon from './HamburgerMenuIcon'

const MobileNavigationButton = ({ styleClasses}) => {
  return (
    <button className={`mobile-navigation__toggle-button ${styleClasses}`}>
      <HamburgerMenuIcon />
    </button>
  )
}

export default MobileNavigationButton

