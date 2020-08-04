import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shortId from 'shortid'

const OurProcessInfoGraphic = ({ stepList }) => {

  const graphicElement = (icon, styleClass) => {
    return (
      <span className={`fa-layers fa-fw our-process-infographic__circle ${styleClass || ''}`}>
          <FontAwesomeIcon
            className='color-secondary'
            icon={['fa', 'circle']}
          />
        {/*<FontAwesomeIcon*/}
        {/*  className='color-white our-process-infographic__icon'*/}
        {/*  icon={icon}*/}
        {/*/>*/}
        </span>
    )
  }

  const graphicLines = (direction) => {
    return (
      <div className='our-process-infographic__line-div--dimensions'>
        {direction && direction === 'left' &&
        (<>
          <div className='our-process-infographic__line-left-bottom'>{}</div>
          <div className='our-process-infographic__line-div-right'>{}</div>
        </>)
        }
        {direction && direction === 'right' &&
        (<>
          <div className='our-process-infographic__line-right-bottom'>{}</div>
          <div className='our-process-infographic__line-div-left'>{}</div>
        </>)
        }
      </div>
    )
  }

  const ourProcessStep = (step, direction, index) => {
    return (
      <li key={shortId.generate()} className='our-process-infographic__li'>


        <div className='our-process-infographic__step-container'>


          <div className={`our-process-infographic__step our-process-infographic__step--right`}>


            {graphicElement(step.icon)}


            <span style={{ width: '100%' }}>


              <label aria-label={step.srText} className='our-process-infographic__text-container'>{step.text}</label>


            </span>


          </div>


          {index < stepList.length - 1 && graphicLines(direction)}


        </div>


      </li>
    )
  }

  const ourProcessStepRight = (step, direction, index) => {
    return (
      <li key={shortId.generate()} className='our-process-infographic__li'>


        <div className='our-process-infographic__step-container'>


          <div className={`our-process-infographic__step ${direction === 'right' ? 'our-process-infographic__step--right' : ''}`} >


            {/*<label className='our-process-infographic__text-container'>{step.text}</label>*/}


            {graphicElement(step.icon)}


          </div>


          {index < stepList.length - 1 && graphicLines('right')}


        </div>


      </li>
    )
  }


  const stepDirection = (index) => index % 2 === 0 ? 'left' : 'right'

  return (
    <ol
      className='our-process-infographic__container background-color-primary color-white remove-padding-left remove-margin'>

      {/*{ourProcessStepLeft(stepList[0], 0)}*/}
      {/*{ourProcessStepRight(stepList[1], 1)}*/}

      {stepList.map((step, index) => {
      return ourProcessStepRight(step, stepDirection(index), index)
      })}
    </ol>
  )
}

export default OurProcessInfoGraphic



{/*  if (index % 2 === 0) {*/}
{/*    return ourProcessStepLeft(step, index)*/}
{/*  } else {*/}
{/*    return ourProcessStepRight(step, index)*/}
{/*  }*/}
