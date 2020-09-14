import React from 'react'
import logo from '../assets/3gc-mobile-logo.svg'
import FooterSection from './FooterSection'
import { NavLink } from 'react-router-dom'
import SocialMediaSection from './SocialMediaSection'

const Footer = () => {

  const servicesOfferedListItems = ['Remodel', 'Roofing', 'Siding', 'Repairs']
  return (
    <div className='footer__container'>
      <SocialMediaSection/>
      {/* BEM would an image be footer__img--logo? */}
      <div className='footer__logo-container'>
      <img alt='Third Generation Construction Company Logo' className='footer__logo' src={logo}/>
      </div>
      <ul className='footer__ul'>
        <li><NavLink className='footer__link' to='/'>Home</NavLink></li>
        <li><NavLink className='footer__link' to='/about'>About</NavLink></li>
        <li>
          <FooterSection header='Services' listItems={servicesOfferedListItems}/>
        </li>
        <li><NavLink className='footer__link' to='/our-work'>Our Work</NavLink></li>
        <li><NavLink className='footer__link' to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className='footer__link' to='/contact'>Contact Us</NavLink></li>
        <li><NavLink className='footer__link' to='/emergency-service'>24-Hour Emergency Service</NavLink></li>
      </ul>
      <div className='footer__sub-footer'>

      </div>
    </div>
  )
}

export default Footer
