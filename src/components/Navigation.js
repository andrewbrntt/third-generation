import React from 'react'
import { NavLink } from 'react-router-dom'
import HamburgerMenuIcon from './HamburgerMenuIcon'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <HamburgerMenuIcon />
    </nav>
  )
}

export default Navigation


// <ul className='navigation__ul'>
//   <li className='navigation__li'>
//   <NavLink className='navigation__li-anchor' to='/about'>About</NavLink>
// </li>
// <li aria-hidden='true' className='navigation__li'>
// <span className='navigation__span-separator'>|</span>
// </li>
// <li className='navigation__li'>
// <NavLink className='navigation__li-anchor' to='/services'>Services</NavLink>
// </li>
// <li aria-hidden='true' className='navigation__li'>
// <span className='navigation__span-separator'>|</span>
// </li>
// <li>
// <NavLink className='navigation__li-anchor' to='/contact'>Contact</NavLink>
// </li>
// </ul>
