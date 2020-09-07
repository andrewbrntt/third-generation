import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import shortId from 'shortid'
import MobileNavigationButton from './MobileNavigationButton'

const MobileNavigationMenu = ({ createRouteObject }) => {

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

  const toggleMobileNav = (e) => {
    e.preventDefault()
    setNavIsOpen(!navIsOpen)
  }

  const createNavMenuItem = (routeName, routeTo, styleClasses = '', exact = false, ariaLabelledBy = null) => {
    let elementId = `${ariaLabelledBy}-${routeName.toString().toLowerCase()}`

    const inputProps = {
      id: elementId,
      'aria-labelledby': `${ariaLabelledBy} ${elementId}`
    }

    const ariaAttributes = ariaLabelledBy ? inputProps : {}

    return (
      <li key={shortId.generate()}>
        <NavLink
          {...ariaAttributes}
          activeClassName='background-color-secondary'
          exact={exact}
          className={styleClasses}
          to={createRouteObject(routeTo)}
        >
          {routeName}
        </NavLink>
      </li>
    )
  }

  const createMenuList = (routes, styleClasses, ariaLabelledBy = null) => {
    return (
      <ul className={styleClasses}>
        {routes.map(route => {
          return createNavMenuItem(route.routeName, route.routeTo, route.styleClasses, route.exact, ariaLabelledBy)
        })}
      </ul>
    )
  }

  return (
    <nav className='mobile-navigation--display' role='navigation'>
      <MobileNavigationButton
        navIsOpen={navIsOpen}
        toggleNavMenu={toggleMobileNav}
        styleClasses='mobile-navigation__menu-button'
      />
      <div role='menu' className='mobile-navigation__container background-color-primary color-white'>
        <div style={{ display: !navIsOpen && 'none' }}>
          {createMenuList(topMenuRoutes, 'mobile-navigation__ul remove-padding action-text')}
          <h2 id='mobile-navigation__services-heading' className='mobile-navigation__heading'>Services</h2>
          {createMenuList(serviceRoutes, 'mobile-navigation__ul mobile-navigation__nested-list remove-padding action-text', 'mobile-navigation__services-heading')}
          {createMenuList(bottomMenuRoutes, 'mobile-navigation__ul remove-padding action-text')}
        </div>
      </div>
    </nav>
  )
}

export default MobileNavigationMenu
