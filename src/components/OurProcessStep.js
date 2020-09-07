import React from 'react'
import OurProcessIcon from './OurProcessIcon'

const OurProcessStep = ({ step, iconPlacementSide, index }) => {
  const right = 'right'
  const left = 'left'
  const infoStepStyles = iconPlacementSide === right ? 'our-process-infographic__step--right' : ''

  return (
    <div className={`our-process-infographic__step ${infoStepStyles}`}>
      {iconPlacementSide === right &&
      <label className='our-process-infographic__text-container'>{step.text}</label>}
      <OurProcessIcon icon={step.icon} styleClass={iconPlacementSide === right && 'grid-column-3'}/>
      {iconPlacementSide === left &&
      <label className='our-process-infographic__text-container'>{step.text}</label>}
    </div>
  )
}
export default OurProcessStep

