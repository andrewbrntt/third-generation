import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shortId from 'shortid'
import Tools from '../assets/icon-tools.svg'

const SidingInfographic = () => {

  const sidingStep = (step) => {
    return (
      <div key={shortId.generate()} className='siding-infographic__step-container'>
        <h3 className='siding-infographic__step-title remove-margin-top'>{step.title}</h3>
        <div className={`siding-infographic__step ${step.reverseDirection && 'siding-infographic__step--reverse'}`}>
          {
            <>
              {step.icon}
              <p className='siding-infographic__p'>
                {step.text}
              </p>
            </>
          }
        </div>
      </div>
    )
  }

  const beautifyExteriorIcon = () => {
    return (
      <span className='siding-infographic__beautify-exterior--margin-right fa-stack'>
        <FontAwesomeIcon icon={['fas', 'home']} className='fa-stack-item beautify-exterior__fa-home-icon'/>
        <FontAwesomeIcon icon={['far', 'sparkles']} className='beautify-exterior__fa-sparkles fa-stack-item'
                         transform='left-4 up-10'/>
      </span>
    )
  }

  const lowerUtilityCostIcon = () => {
    return (
      <span className='lower-utility-cost__icon-container'>
      <FontAwesomeIcon icon={['far', 'temperature-down']}/>
      </span>
    )
  }

  const lowerMaintenanceCostsIcon = () => {
    return (
      <span className='lower-maintenance-cost__icon-container'>
        <img src={Tools} role='img'/>
      </span>
    )
  }

  const protectStructuralIntegrityIcon = () => {
    return (
      <span className='protect-structural-integrity__icon-container'>
        <span className='protect-structural-integrity__icon-weather-column color-secondary'>
          <FontAwesomeIcon icon={['far', 'raindrops']} className='protect-structural-integrity__icon-weather'/>
          <FontAwesomeIcon icon={['far', 'sun']} className='protect-structural-integrity__icon-weather'/>
          <FontAwesomeIcon icon={['far', 'snowflake']} className=''/>
        </span>
          <FontAwesomeIcon icon={['far', 'house']} className='protect-structural-integrity__fa-home-icon'/>
      </span>
    )
  }

  const beautifyExterior = {
    title: 'Beautify Exterior',
    text: 'Make your home\'s curb appeal stand out and increase its value.',
    icon: beautifyExteriorIcon()
  }

  const lowerUtilityCost = {
    title: 'Lower Utility Costs',
    text: 'Make your home\'s curb appeal stand out and increase its value.',
    icon: lowerUtilityCostIcon(),
    reverseDirection: true
  }

  const lowerMaintenanceCost = {
    title: 'Lower Maintenance Costs',
    text: 'Replace worn siding and reduce the number of repairs your home needs.',
    icon: lowerMaintenanceCostsIcon()
  }

  const protectStructuralIntegrity = {
    title: 'Protect Structural Integrity',
    text: 'Defend your home from harsh Lake Erie weather and extreme temperatures.',
    icon: protectStructuralIntegrityIcon(),
    reverseDirection: true
  }

  const sidingInfographicSteps =
    [
      beautifyExterior,
      lowerUtilityCost,
      lowerMaintenanceCost,
      protectStructuralIntegrity
    ]

  return (
    <>
      <div className='siding-infographic__container'>
        {sidingInfographicSteps.map(step => sidingStep(step))}
      </div>
    </>
  )
}

export default SidingInfographic
