import React from 'react'
import OurProcessIcon from './OurProcessIcon'

const OurProcessStep = ({ step, iconPlacementSide }) => {
  const RIGHT = 'right'
  const LEFT = 'left'

  const infoStepStyles = iconPlacementSide === RIGHT ? 'our-process-infographic__step--right' : ''

  return (
    <div className={`our-process-infographic__step ${infoStepStyles}`}>
      {iconPlacementSide === RIGHT &&
      <label className={`our-process-infographic__text-container ${step.isTextLong ? 'our-process-infographic__free-inspection' : ''}`}>{step.text}</label>}
      <OurProcessIcon icon={step.icon} styleClass={iconPlacementSide === RIGHT && 'grid-column-3'}/>
      {iconPlacementSide === LEFT &&
      <label className={`our-process-infographic__text-container ${step.isTextLong ? 'our-process-infographic__free-inspection' : ''}`}>{step.text}</label>}
    </div>
  )
}
export default OurProcessStep
