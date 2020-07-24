import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNavigationButton from './MobileNavigationButton'
import logo from '../assets/3GC_Logo-White.svg'

const MobileNavigationMenu = () => {

  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleMobileNav = (e) => {
    e.preventDefault()
    console.log('yup clicked')
    setNavIsOpen(!navIsOpen)
  }

  useEffect(() => {
    const menuLinks = document.getElementsByClassName('nav-link')

    const handleLinkClick = () => {
      setNavIsOpen(!navIsOpen)
    }

    menuLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick)
    })

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [navIsOpen])

  return (
    <nav role='navigation'>
      <div className='header'>
        <MobileNavigationButton
          navIsOpen={navIsOpen}
          toggleNavMenu={toggleMobileNav}
          styleClasses='header__mobile-navigation nav-button'
        />
        <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo}/>
      </div>
      <div role='menu' className='mobile-navigation__container background-color-primary color-white'
           style={{ display: !navIsOpen && 'none', height: document.body.offsetHeight }}>
        <ul className='mobile-navigation__ul remove-padding action-text'>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/about'>About</NavLink></li>
        </ul>
        <h2 className='mobile-navigation__heading'>Services</h2>
        <ul className='mobile-navigation__ul mobile-navigation__nested-list remove-padding action-text'>
          <li><NavLink className='nav-link' to='/remodel'>Home Remodel</NavLink></li>
          <li><NavLink className='nav-link' to='/roofing'>Roofing</NavLink></li>
          <li><NavLink className='nav-link' to='/siding'>Siding</NavLink></li>
          <li><NavLink className='nav-link' to='/repairs'>Repairs</NavLink></li>
        </ul>
        <ul className='mobile-navigation__ul remove-padding action-text'>
          <li><NavLink className='nav-link' to='/our-work'>Our Work</NavLink></li>
          <li><NavLink className='nav-link' to='/reviews'>Reviews</NavLink></li>
          <li><NavLink className='nav-link' to='/contact'>Contact Us</NavLink></li>
          <li><NavLink className='nav-link' to='/emergency-service'>24-Hour Emergency Service</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNavigationMenu
