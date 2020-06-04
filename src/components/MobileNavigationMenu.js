import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavigationMenu = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__ul'>
        <li className='navigation__li'>
          <NavLink className='navigation__li-anchor' to='/about'>About</NavLink>
        </li>
        <li aria-hidden='true' className='navigation__li'>
          <span className='navigation__span-separator'>|</span>
        </li>
        <li className='navigation__li'>
          <NavLink className='navigation__li-anchor' to='/services'>Services</NavLink>
        </li>
        <li aria-hidden='true' className='navigation__li'>
          <span className='navigation__span-separator'>|</span>
        </li>
        <li>
          <NavLink className='navigation__li-anchor' to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavigationMenu
