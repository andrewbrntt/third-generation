import React from 'react'
import logo from '../assets/3GC_Logo-White.svg'
import Navigation from './Navigation'
import MobileNavigationButton from './MobileNavigationButton'

const Header = () => {
  return (
    <div className='header'>
      <MobileNavigationButton styleClasses='header__mobile-navigation' />
      {/*<div className='test-nav-container'>*/}
      {/*  <Navigation styleClasses='header__mobile-navigation'/>*/}
      {/*</div>*/}
      <div className='header__logo-container'>
        <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo}/>
      </div>
    </div>
  )
}
export default Header
