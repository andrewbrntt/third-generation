import React, {forwardRef} from 'react'
import HamburgerMenuIcon from './HamburgerMenuIcon'
import ReactDOM from 'react-dom'

const MobileNavigationButton = ({ styleClasses, toggleNavMenu, navIsOpen }) => {

  return (
    <button
      className={`mobile-navigation__toggle-button ${styleClasses}`}
      aria-haspopup='menu'
      aria-expanded={navIsOpen}
      onClick={toggleNavMenu}>
      <HamburgerMenuIcon/>
    </button>
  )
}

export default MobileNavigationButton

