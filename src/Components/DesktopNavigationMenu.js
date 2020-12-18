import React, { useLayoutEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import shortId from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { routesData } from '../DataObjects/routes'

const DesktopNavigationMenu = () => {

  const servicesFirstSubMenuItem = useRef(null)
  const servicesLastSubMenuItem = useRef(null)
  const ourWorkMenuItem = useRef(null)

  const [servicesSubMenuIsOpen, setServicesSubMenuIsOpen] = useState(false)
  const [servicesSubMenuEventType, setServicesSubMenuEventType] = useState('')

  const handleSubmenuToggle = (e) => {
    e.preventDefault()

    if (e.keyCode === 13) {
      // noinspection JSUnresolvedFunction
      servicesFirstSubMenuItem.current.focus()
      setServicesSubMenuIsOpen(!servicesSubMenuIsOpen)
    }
  }

  const handleSubmenuClose = (e) => {
    e.preventDefault()
    setServicesSubMenuIsOpen(false)
    setServicesSubMenuEventType(e.type)
  }

  useLayoutEffect(() => {
    if (!servicesSubMenuIsOpen && servicesSubMenuEventType === 'blur') {
      // noinspection JSUnresolvedFunction
      ourWorkMenuItem.current.focus()
    }
  }, [servicesSubMenuIsOpen, servicesSubMenuEventType])

  return (
    <nav className='desktop-nav__container'>
      <ul className='desktop-nav__ul action-text color-white'>
        <li>
          <NavLink
            className=''
            to={routesData.home.routeTo}
          >
            {routesData.home.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to={routesData.about.routeTo}
          >
            {routesData.about.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li onKeyUp={handleSubmenuToggle}
            className='desktop-nav__services-li'>
          <a className='desktop-nav__services-drop-down' href='#'>
            Services
            <FontAwesomeIcon
              className='color-white desktop-nav__services-caret-down'
              icon={'caret-down'}
            />
          </a>
          <ul
            className={`desktop-nav__services-submenu ${servicesSubMenuIsOpen ? 'desktop-nav__submenu-is-open' : ''}`}>
            <li>
              <NavLink
                ref={servicesFirstSubMenuItem}
                to={routesData.remodel.routeTo}
              >
                {routesData.remodel.routeName}
              </NavLink>
            </li>
            <li>
              <NavLink to={routesData.roofing.routeTo}>
                {routesData.roofing.routeName}
              </NavLink>
            </li>
            <li>
              <NavLink to={routesData.siding.routeTo}>
                {routesData.siding.routeName}
              </NavLink>
            </li>
            <li>
              <NavLink ref={servicesLastSubMenuItem} to={routesData.repairs.routeTo}>
                {routesData.repairs.routeName}
              </NavLink>
            </li>
            <li onBlur={handleSubmenuClose}>
              <NavLink ref={servicesLastSubMenuItem} to={routesData.emergency.routeTo}>
                {routesData.emergency.routeName}
              </NavLink>
            </li>
          </ul>
        </li>
        <li aria-hidden='true'>|</li>
        <li>
          <NavLink ref={ourWorkMenuItem} to={routesData.ourWork.routeTo}>
            {routesData.ourWork.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li>
          <NavLink to={routesData.reviews.routeTo}>
            {routesData.reviews.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li>
          <NavLink to={routesData.contactUs.routeTo}>
            {routesData.contactUs.routeName}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavigationMenu
