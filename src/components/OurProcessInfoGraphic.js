import React from 'react'
import shortId from 'shortid'
import { GraphicLeftLines, GraphicRightLines } from './OurProcessLine'
import OurProcessStep from './OurProcessStep'

const OurProcessInfoGraphic = ({ stepList }) => {
  const right = 'right'
  const left = 'left'

  return (
    <ol
      className='our-process-infographic__container
      background-color-primary
      color-white
      remove-padding-left
      remove-margin'>
      {stepList.map((step, index) => {
        let iconPlacementSide = index % 2 === 0 ? left : right
        let lineElement = iconPlacementSide === right ? <GraphicRightLines/> : <GraphicLeftLines/>
        return (
          <li key={shortId.generate()} className='our-process-infographic__li'>
            <div className='our-process-infographic__step-container'>
              <OurProcessStep step={step} index={index} iconPlacementSide={iconPlacementSide}/>
              <div className='our-process-infographic__line-div--dimensions'>
                {index < stepList.length - 1 && lineElement}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
export default OurProcessInfoGraphic
