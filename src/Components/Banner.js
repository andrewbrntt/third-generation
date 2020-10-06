import React from 'react'
import { Link } from 'react-router-dom'
import { routesData } from '../DataObjects/routes'
import ContactPhoneLink from './ContactPhoneLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = () => {
  return (
    <section role='banner' className='background-color-secondary banner'>
      <Link to={routesData.emergency.routeTo} className='remove-margin banner-text'>
        24-Hour Emergency Service
      </Link>
      <span>
        <FontAwesomeIcon style={{ marginRight: '0.5rem' }} size='2x' icon={['fas', 'phone']}/>
      <ContactPhoneLink className='banner-text'/>
      </span>
    </section>
  )
}

export default Banner
