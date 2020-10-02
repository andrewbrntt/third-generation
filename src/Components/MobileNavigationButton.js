import React from 'react'
import HamburgerMenuIcon from './HamburgerMenuIcon'

const MobileNavigationButton = ({ styleClasses, toggleNavMenu, navIsOpen }) => {

  return (
    <button
      className={`mobile-navigation__toggle-button ${styleClasses}`}
      aria-expanded={navIsOpen}
      onClick={toggleNavMenu}>
      <HamburgerMenuIcon/>
    </button>
  )
}

export default MobileNavigationButton

