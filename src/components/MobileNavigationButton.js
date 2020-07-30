import React, {forwardRef} from 'react'
import HamburgerMenuIcon from './HamburgerMenuIcon'

const MobileNavigationButton = ({ styleClasses, toggleNavMenu, navIsOpen }, forwardedRef) => {

  return (
    <button
      className={`mobile-navigation__toggle-button ${styleClasses}`}
      aria-haspopup='menu'
      ref={forwardedRef}
      aria-expanded={navIsOpen}
      onClick={toggleNavMenu}>
      <HamburgerMenuIcon/>
    </button>
  )
}

export default forwardRef(MobileNavigationButton)

