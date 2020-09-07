import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DecorativeImage from './DecorativeImage'
import Tools from '../assets/icon-tools.svg'

export const BeautifyExteriorIcon = () => {
  return (
    <div className='fa-stack siding-icon-container-home'>
      <FontAwesomeIcon icon={['fas', 'home']} className='siding-infographic__beautify-exterior-icon'/>
      <FontAwesomeIcon icon={['far', 'sparkles']} className='siding-icon-stars'
                       transform='left-13 up-38'/>
    </div>
  )
}

export const LowerUtilityCostIcon = () => {
  return (
    <div className='lower-utility-cost__icon-container'>
      <FontAwesomeIcon icon={['far', 'temperature-down']}/>
      </div>
  )
}

export const LowerMaintenanceCostsIcon = () => {
  return (
    <div className='lower-maintenance-cost__icon'>
        <DecorativeImage src={Tools} role='img'/>
      </div>
  )
}

export const ProtectStructuralIntegrityIcon = () => {
  return (
    <div className='protect-structural-integrity__icon-container'>
        <span className='protect-structural-integrity__icon-weather-column color-secondary'>
          <FontAwesomeIcon icon={['far', 'raindrops']} className='protect-structural-integrity__icon-weather'/>
          <FontAwesomeIcon icon={['far', 'sun']} className='protect-structural-integrity__icon-weather'/>
          <FontAwesomeIcon icon={['far', 'snowflake']} />
        </span>
          <FontAwesomeIcon icon={['far', 'house']} className='protect-structural-integrity__fa-home-icon'/>
      </div>
  )
}
