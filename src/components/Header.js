import React from 'react'
import logo from '../assets/3gc-logo-white.svg'
import MobileNavigationMenu from './MobileNavigationMenu'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const createRouteObject = (route) => {
    return {
      pathname: route,
      state: { navIsOpen: false }
    }
  }


  return (
    <div className='header'>
      <MobileNavigationMenu createRouteObject={createRouteObject} />
      <div className='header__logo-container'>
      <NavLink to={createRouteObject('/')}>
        <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo}/>
      </NavLink>
      </div>
    </div>
  )
}

export default Header
