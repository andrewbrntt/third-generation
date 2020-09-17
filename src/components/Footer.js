import React from 'react'
import logo from '../assets/3gc-logo-white.svg'
import FooterSection from './FooterSection'
import { NavLink } from 'react-router-dom'
import SocialMediaSection from './SocialMediaSection'
import { routesData } from '../DataObjects/routes'

const Footer = () => {

  const serviceRoutes = [
    { routeName: 'Remodel', routeTo: '/remodel' },
    { routeName: 'Roofing', routeTo: '/roofing' },
    { routeName: 'Siding', routeTo: '/siding' },
    { routeName: 'Repairs', routeTo: '/repairs' }
    ]

  return (
    <div className='footer__container'>
      <SocialMediaSection/>
      <div className='footer__logo-container'>
        <NavLink to={routesData.home.routeTo}>
        <img alt='Third Generation Construction Company Logo' className='footer__logo' src={logo}/>
        </NavLink>
        </div>
      <ul className='footer__ul'>
        <li>
          <NavLink className='footer__link' to={routesData.home.routeTo}>
            {routesData.home.routeName}
          </NavLink>
        </li>
        <li>
          <NavLink className='footer__link' to={routesData.about.routeTo}>
            {routesData.about.routeName}
          </NavLink>
        </li>
        <li>
          <FooterSection header='Services' listItems={serviceRoutes}/>
        </li>
        <li>
          <NavLink className='footer__link' to={routesData.ourWork.routeTo}>
            {routesData.ourWork.routeName}
          </NavLink>
        </li>
        <li>
          <NavLink className='footer__link' to={routesData.reviews.routeTo}>
            {routesData.reviews.routeName}
          </NavLink>
        </li>
        <li>
          <NavLink className='footer__link' to={routesData.contactUs.routeTo}>
            {routesData.contactUs.routeName}
          </NavLink>
        </li>
        <li>
          <NavLink className='footer__link' to={routesData.emergency.routeTo}>
            {routesData.emergency.routeName}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Footer
