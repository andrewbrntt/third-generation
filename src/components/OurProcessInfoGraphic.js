import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shortId from 'shortid'

const OurProcessInfoGraphic = ({ stepList }) => {

  const graphicElement = (icon, styleClass) => {
    return (
      <span className={`fa-layers fa-fw our-process-infographic__circle ${styleClass}`}>
          <FontAwesomeIcon
            className='color-secondary'
            icon={['fa', 'circle']}
          />
          <FontAwesomeIcon
            className='color-white our-process-infographic__icon'
            icon={icon}
          />
        </span>
    )
  }

  const ourProcessStepLeft = (step, index) => {
    return (
      <div key={shortId.generate()} className='our-process-infographic__step-container'>
        <div className='our-process-infographic__step'>
          {graphicElement(step.icon, 'our-process-infographic__circle--margin-left')}
          <span className='our-process-infographic__text-container'>{step.text}</span>
        </div>
        {index < stepList.length - 1 &&
        <>
          <div className='our-process-infographic__line-left-bottom'>{}</div>
          <div className='our-process-infographic__line-div-right'>{}</div>
        </>
        }
      </div>
    )
  }

  const ourProcessStepRight = (step, index) => {
    return (
      <div key={shortId()} className='our-process-infographic__step-container'>
        <div className='our-process-infographic__step our-process-infographic__step--right'>
          <span className='our-process-infographic__text-container'>{step.text}</span>
          {graphicElement(step.icon, 'our-process-infographic__circle--margin-right')}
        </div>
        {index < stepList.length - 1 &&
        <>
          <div className='our-process-infographic__line-right-bottom'>{}</div>
          <div className='our-process-infographic__line-div-left'>{}</div>
        </>
        }
      </div>
    )
  }

  return (
    <div className='our-process-infographic__container background-color-primary color-white'>
      {stepList.map((step, index) => {
        if (index % 2 === 0) {
          return ourProcessStepLeft(step, index)
        } else {
          return ourProcessStepRight(step, index)
        }
      })}
    </div>
  )
}

export default OurProcessInfoGraphic
