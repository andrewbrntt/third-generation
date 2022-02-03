import React from 'react'
import { NavLink } from 'react-router-dom'

const DropDownMenu = ({ routes, subMenuIsOpen, firstSubMenuItem, lastSubMenuItem, handleSubMenuClose }) => {

  const createNavLink = (route, currentIndex) => {
    switch (currentIndex) {
      case 0:
        return (
          <li key={ currentIndex }>
            <NavLink
              ref={ firstSubMenuItem }
              to={ route.routeTo }>
              { route.routeName }
            </NavLink>
          </li>
        )
      case routes.length - 1:
        return (
          <li key={ currentIndex } onBlur={ handleSubMenuClose }>
            <NavLink
              ref={ lastSubMenuItem }
              to={ route.routeTo }>
              { route.routeName }
            </NavLink>
          </li>
        )
      default:
        return (
          <li key={ currentIndex }>
            <NavLink
              to={ route.routeTo }>
              { route.routeName }
            </NavLink>
          </li>
        )
    }
  }

  return (
    <ul
      className={ `desktop-nav__services-submenu ${ subMenuIsOpen ? 'desktop-nav__submenu-is-open' : '' }` }>
      {
        routes.map((route, index) => {
          return createNavLink(route, index)
        })
      }
    </ul>
  )
}

export default DropDownMenu
