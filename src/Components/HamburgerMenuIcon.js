import React from 'react'

const HamburgerMenuIcon = () => {
  return (
    <div className='hamburger-menu-icon__container' aria-hidden='true'>
      <div className='hamburger-menu-icon__long-bar'/>
      <div className='hamburger-menu-icon__long-bar hamburger-menu-icon__bar--margin-y'/>
      <div className='hamburger-menu-icon__short-bar'/>
    </div>
  )
}

export default HamburgerMenuIcon
