import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNavigationButton from './MobileNavigationButton'
import logo from '../assets/3GC_Logo-White.svg'

const MobileNavigationMenu = () => {

  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleMobileNav = (e) => {
    e.preventDefault()
    setNavIsOpen(!navIsOpen)
  }

  return (
    <nav role='navigation'>
      <div className='header'>
        <MobileNavigationButton toggleNavMenu={toggleMobileNav} navIsOpen={navIsOpen}
                                styleClasses='header__mobile-navigation'/>
        <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo}/>
      </div>
      <div className='mobile-navigation__container background-color-primary color-white'
           style={{ display: !navIsOpen && 'none', height: document.body.offsetHeight }}>
        <ul className='mobile-navigation__ul remove-padding action-text'>
          <li><NavLink to='/contact'>Home</NavLink></li>
          <li><NavLink to='/contact'>About</NavLink></li>
        </ul>
        <h2 className='mobile-navigation__heading'>Services</h2>
        <ul className='mobile-navigation__ul mobile-navigation__nested-list remove-padding action-text'>
          <li><NavLink to='/contact'>Home Remodel</NavLink></li>
          <li><NavLink to='/contact'>Roofing</NavLink></li>
          <li><NavLink to='/contact'>Siding</NavLink></li>
          <li><NavLink to='/contact'>Repairs</NavLink></li>
        </ul>
        <ul className='mobile-navigation__ul remove-padding action-text'>
          <li><NavLink to='/contact'>Our Work</NavLink></li>
          <li><NavLink to='/contact'>Reviews</NavLink></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/contact'>24-Hour Emergency Service</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNavigationMenu
