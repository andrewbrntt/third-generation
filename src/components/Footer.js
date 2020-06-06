import React from 'react'
import logo from '../assets/3GC_Logo-White.svg'
import FooterSection from './FooterSection'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const servicesOfferedListItems = ['Remodel', 'Roofing', 'Siding']
  return (
    <>
      {/* BEM would an image be footer__img--logo? */}
      <img alt='Third Generation Construction Company Logo' className='footer__logo' src={logo}/>
      <ul className='footer__ul'>
        <li><NavLink className='footer__link' to='/'>Home</NavLink></li>
        <li><NavLink className='footer__link' to='/about'>About</NavLink></li>
        <li><NavLink className='footer__link' to='/reviews'>Reviews</NavLink></li>
      </ul>
      <FooterSection header='Services' listItems={servicesOfferedListItems} />
    </>
  )
}

export default Footer