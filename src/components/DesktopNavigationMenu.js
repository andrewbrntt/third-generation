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

      setServicesSubMenuIsOpen(!servicesSubMenuIsOpen)
  }

  const handleSubmenuOpen = (e) => {
    e.preventDefault()
    setServicesSubMenuIsOpen(true)
    setServicesSubMenuEventType(e.type)
  }

  const handleSubmenuClose = (e) => {
    e.preventDefault()
    setServicesSubMenuIsOpen(false)
    setServicesSubMenuEventType(e.type)
  }

  const handleShiftTab = (e) => {
    e.preventDefault()

    // if(e.key === 9 && e.shiftKey) {
    //   setServicesSubMenuIsOpen(true)
    //   servicesLastSubMenuItem.current.focus()
    // }
  }


  const handleSubmenuCloseTimeout = () => {
    setTimeout(() => {
      setServicesSubMenuIsOpen(false)
    }, 700)
  }

  useLayoutEffect(() => {
    // if (servicesSubMenuIsOpen) {
    //     servicesFirstSubMenuItem.current.focus()
    //   }

    if(!servicesSubMenuIsOpen && servicesSubMenuEventType === 'blur') {
        ourWorkMenuItem.current.focus()
    }
  }, [servicesSubMenuIsOpen, servicesSubMenuEventType])

  return (
    <nav className='desktop-nav__container'>
      <ul className='desktop-nav__ul action-text color-white'>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to={routesData.about.routeTo}
          >
            {routesData.about.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li
            className='desktop-nav__services-li' key={shortId.generate()}>
          <a href='#'>
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
                className=''
                to={routesData.remodel.routeTo}
              >
                {routesData.remodel.routeName}
              </NavLink>
            </li>
            <li>
              <NavLink
                className=''
                to={routesData.roofing.routeTo}
              >
                {routesData.roofing.routeName}
              </NavLink>
            </li>
            <li>
              <NavLink
                className=''
                to={routesData.siding.routeTo}
              >
                {routesData.siding.routeName}
              </NavLink>
            </li>
            <li onBlur={handleSubmenuClose}>
              <NavLink
                ref={servicesLastSubMenuItem}
                className=''
                to={routesData.repairs.routeTo}
              >
                {routesData.repairs.routeName}
              </NavLink>
            </li>
          </ul>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            ref={ourWorkMenuItem}
            className=''
            to={routesData.ourWork.routeTo}
          >
            {routesData.ourWork.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to={routesData.reviews.routeTo}
          >
            {routesData.reviews.routeName}
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to={routesData.contactUs.routeTo}
          >
            {routesData.contactUs.routeName}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavigationMenu
