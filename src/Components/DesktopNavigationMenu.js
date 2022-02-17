import React, { useLayoutEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import shortId from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { routesData } from '../DataObjects/routes'
import DropDownMenu from './DropDownMenu'

const DesktopNavigationMenu = () => {

  const firstSubMenuItem = useRef(null)
  const lastSubMenuItem = useRef(null)
  const ourWorkMenuItem = useRef(null)

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)
  const [subMenuEventType, setSubMenuEventType] = useState('')

  const handleSubmenuToggle = (e) => {
    e.preventDefault()

    if (e.keyCode === 13) {
      // noinspection JSUnresolvedFunction
      firstSubMenuItem.current.focus()
      setSubMenuIsOpen(!subMenuIsOpen)
    }
  }

  const handleSubmenuClose = (e) => {
    e.preventDefault()
    setSubMenuIsOpen(false)
    setSubMenuEventType(e.type)
  }

  useLayoutEffect(() => {
    if (!subMenuIsOpen && subMenuEventType === 'blur') {
      // noinspection JSUnresolvedFunction
      ourWorkMenuItem.current.focus()
    }
  }, [subMenuIsOpen, subMenuEventType])

  return (
    <nav className="desktop-nav__container">
      <ul className="desktop-nav__ul action-text color-white">
        <li>
          <NavLink
            className=""
            to={ routesData.home.routeTo }
          >
            { routesData.home.routeName }
          </NavLink>
        </li>
        <li aria-hidden="true">|</li>
        <li key={ shortId.generate() }>
          <NavLink
            className=""
            to={ routesData.about.routeTo }
          >
            { routesData.about.routeName }
          </NavLink>
        </li>
        <li aria-hidden="true">|</li>
        <li onKeyUp={ handleSubmenuToggle }
            className="desktop-nav__services-li">
          <button className="nav__button-link-style desktop-nav__services-drop-down">
            Services
            <FontAwesomeIcon
              className="color-white desktop-nav__services-caret-down"
              icon={ 'caret-down' }
            />
          </button>
          <DropDownMenu
            routes={routesData.services}
            subMenuIsOpen={subMenuIsOpen}
            firstSubMenuItem={firstSubMenuItem}
            lastSubMenuItem={lastSubMenuItem}
            handleSubmenuClose={handleSubmenuClose}
          />
        </li>
        <li aria-hidden="true">|</li>
        <li onKeyUp={ handleSubmenuToggle }
            className="desktop-nav__services-li">
          <button className="nav__button-link-style desktop-nav__services-drop-down">
            Photo Galleries
            <FontAwesomeIcon
              className="color-white desktop-nav__services-caret-down"
              icon={ 'caret-down' }
            />
          </button>
          <DropDownMenu
            routes={routesData.imageGalleries}
            subMenuIsOpen={subMenuIsOpen}
            firstSubMenuItem={firstSubMenuItem}
            lastSubMenuItem={lastSubMenuItem}
            handleSubmenuClose={handleSubmenuClose}
          />
        </li>
        <li aria-hidden="true">|</li>
        <li>
          <NavLink to={ routesData.reviews.routeTo }>
            { routesData.reviews.routeName }
          </NavLink>
        </li>
        <li aria-hidden="true">|</li>
        <li>
          <NavLink to={ routesData.contactUs.routeTo }>
            { routesData.contactUs.routeName }
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavigationMenu
