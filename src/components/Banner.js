import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {routesData} from '../DataObjects/routes'
//TODO: The text in this banner does not meet wcag color contrast requirements
// because the text is not big enough to be considered "large" 24px so it needs 4.5:1 ratio
const Banner = () => {
  return (
    <section role='banner' className='background-color-secondary banner'>
      <Link to={routesData.emergency.routeTo} className='remove-margin banner-text'>
        24-Hour Emergency Service
      </Link>
    </section>
  )
}

export default Banner
