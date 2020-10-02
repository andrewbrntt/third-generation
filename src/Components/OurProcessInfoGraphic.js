import React from 'react'
import shortId from 'shortid'
import { GraphicLeftLines, GraphicRightLines } from './OurProcessLine'
import OurProcessStep from './OurProcessStep'

const OurProcessInfoGraphic = ({ stepList }) => {
  const RIGHT = 'right'
  const LEFT = 'left'

  return (
    <ol
      className='our-process-infographic__container
      background-color-primary
      color-white
      remove-padding-left
      remove-margin'>
      {stepList.map((step, index) => {
        let iconPlacementSide = index % 2 === 0 ? LEFT : RIGHT
        let lineElement = iconPlacementSide === RIGHT ? <GraphicRightLines margin={step.margin}/> : <GraphicLeftLines
          margin={step.margin}/>
        return (
          <li key={shortId.generate()} className='our-process-infographic__li'>
            <div className='our-process-infographic__step-container'>
              <OurProcessStep step={step} index={index} iconPlacementSide={iconPlacementSide}/>
              {index < stepList.length - 1 &&
              <div className='our-process-infographic__line-div--dimensions'>
                {lineElement}
              </div>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
export default OurProcessInfoGraphic
