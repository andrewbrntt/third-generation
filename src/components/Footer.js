import React from 'react'
import logo from '../assets/3gc-mobile-logo.svg'
import FooterSection from './FooterSection'
import { NavLink } from 'react-router-dom'
import SocialMediaSection from './SocialMediaSection'

const Footer = () => {

  const servicesOfferedListItems = ['Home Remodel', 'Roofing', 'Siding', 'Repairs']
  return (
    <>
      <SocialMediaSection/>
      {/* BEM would an image be footer__img--logo? */}
      <img alt='Third Generation Construction Company Logo' className='footer__logo' src={logo}/>
      <ul className='footer__ul'>
        <li><NavLink className='footer__link' to='/'>Home</NavLink></li>
        <li><NavLink className='footer__link' to='/about'>About</NavLink></li>
        <li>
          <FooterSection header='Services' listItems={servicesOfferedListItems}/>
        </li>
        <li><NavLink className='footer__link' to='/our-work'>Our Work</NavLink></li>
        <li><NavLink className='footer__link' to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className='footer__link' to='/contact-us'>Contact Us</NavLink></li>
        <li><NavLink className='footer__link' to='/emergency'>24-Hour Emergency Service</NavLink></li>
      </ul>
    </>
  )
}

export default Footer
