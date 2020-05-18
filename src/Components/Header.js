import React from 'react'
import logo from '../assets/3GC_Logo-White.svg'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo-container'>
        <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo} />
      </div>
      <Navigation />
    </div>
  )
}

export default Header
