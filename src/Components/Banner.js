import React from 'react'
import { Link } from 'react-router-dom'
import { routesData } from '../DataObjects/routes'
import ContactPhoneLink from './ContactPhoneLink'

const Banner = () => {
  return (
    <section role='banner' className='background-color-secondary banner'>
      <Link to={routesData.emergency.routeTo} className='remove-margin banner-text'>
        24-Hour Emergency Service
      </Link>
      <ContactPhoneLink className='banner-text' />
    </section>
  )
}

export default Banner
