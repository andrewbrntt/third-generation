import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import shortId from 'shortid'
import MobileNavigationButton from './MobileNavigationButton'
import logo from '../assets/3GC_Logo-White.svg'

const MobileNavigationMenu = () => {

  const serviceRoutes = [
    { routeName: 'Remodel', routeTo: '/remodel' },
    { routeName: 'Roofing', routeTo: '/roofing' },
    { routeName: 'Siding', routeTo: '/siding' },
    { routeName: 'Repairs', routeTo: '/repairs' }
  ]
  const topMenuRoutes = [
    { routeName: 'Home', routeTo: '/', exact: true },
    { routeName: 'About', routeTo: '/about' },
  ]
  const bottomMenuRoutes = [
    { routeName: 'Our Work', routeTo: '/our-work' },
    { routeName: 'Reviews', routeTo: '/reviews' },
    { routeName: 'Contact Us', routeTo: '/contact' },
    {
      routeName: '24-Hour Emergency Service',
      routeTo: '/emergency-service',
      styleClasses: 'mobile-navigation__emergency-service'
    },
  ]

  const [navIsOpen, setNavIsOpen] = useState(false)
  const mobileToggleButtonRef = useRef(null)
  let location = useLocation()

  const toggleMobileNav = (e) => {
    e.preventDefault()
    setNavIsOpen(!navIsOpen)
  }

  const createRouteObject = (route) => {
    return {
      pathname: route,
      state: { navIsOpen: false }
    }
  }

  const createNavMenuItem = (routeName, routeTo, styleClasses = '', exact = false) => {
    return (
      <li key={shortId.generate()}>
        <NavLink activeClassName='background-color-secondary' exact={exact} className={styleClasses} to={createRouteObject(routeTo)}>{routeName}</NavLink>
      </li>
    )
  }

  const createMenuList = (routes, styleClasses) => {
    return (
      <ul className={styleClasses}>
        {routes.map(route => {
          return createNavMenuItem(route.routeName, route.routeTo, route.styleClasses, route.exact)
        })}
      </ul>
    )
  }

  useEffect(() => {
    if (location && location.state) {
      if (location.state.navIsOpen !== null && location.state.navIsOpen !== undefined) {
        setNavIsOpen(location.state.navIsOpen)
      }
    }
  }, [location])

  return (
    <nav role='navigation'>
      <div className='header'>
        <MobileNavigationButton
          navIsOpen={navIsOpen}
          ref={mobileToggleButtonRef}
          toggleNavMenu={toggleMobileNav}
          styleClasses='header__mobile-navigation nav-button'
        />
        <NavLink to={createRouteObject('/')}>
          <img alt='Third Generation Construction Company Logo' className='header__logo' src={logo}/>
        </NavLink>
      </div>
      <div role='menu' className='mobile-navigation__container background-color-primary color-white'
           style={{ display: !navIsOpen && 'none' }}>
        {createMenuList(topMenuRoutes, 'mobile-navigation__ul remove-padding action-text')}
        <h2 className='mobile-navigation__heading'>Services</h2>
        {createMenuList(serviceRoutes, 'mobile-navigation__ul mobile-navigation__nested-list remove-padding action-text')}
        {createMenuList(bottomMenuRoutes, 'mobile-navigation__ul remove-padding action-text')}
      </div>
    </nav>
  )
}

export default MobileNavigationMenu
