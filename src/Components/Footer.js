import React from 'react'
import logo from '../assets/3GC_Logo-White.svg'

const Footer = () => {
  return (
    <>
      {/* BEM would an image be footer__img--logo? */}
      <img alt='Third Generation Construction Company Logo' className='footer__logo' src={logo} />
      <ul className='footer__ul'>
        <li>Home</li>
        <li>Services</li>
        <li>Remodel</li>


        
        <li>Roofing</li>
        <li>Siding</li>
        <li>About</li>
        <li>Reviews</li>
      </ul>
    </>
  )
}

export default Footer
