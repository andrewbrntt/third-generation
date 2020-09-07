import React, { useLayoutEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import shortId from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DesktopNavigationMenu = () => {

  const servicesFirstSubMenuItem = useRef(null)
  const servicesLastSubMenuItem = useRef(null)
  const ourWorkMenuItem = useRef(null)

  const [servicesSubMenuIsOpen, setServicesSubMenuIsOpen] = useState(false)
  const [servicesSubMenuEventType, setServicesSubMenuEventType] = useState('')

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
    if (servicesSubMenuIsOpen && servicesSubMenuEventType === 'click') {
        servicesFirstSubMenuItem.current.focus()
      }

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
            to=''
          >
            About
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li onMouseOver={handleSubmenuOpen} onMouseLeave={handleSubmenuCloseTimeout} onClick={handleSubmenuOpen}
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
                to=''
              >
                Remodel
              </NavLink>
            </li>
            <li>
              <NavLink
                className=''
                to=''
              >
                Roofing
              </NavLink>
            </li>
            <li>
              <NavLink
                className=''
                to=''
              >
                Siding
              </NavLink>
            </li>
            <li onBlur={handleSubmenuClose}>
              <NavLink
                ref={servicesLastSubMenuItem}
                className=''
                to=''
              >
                Repairs
              </NavLink>
            </li>
          </ul>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            ref={ourWorkMenuItem}
            className=''
            to=''
          >
            Our Work
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to=''
          >
            Reviews
          </NavLink>
        </li>
        <li aria-hidden='true'>|</li>
        <li key={shortId.generate()}>
          <NavLink
            className=''
            to=''
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavigationMenu
