import React from 'react'
import { GraphicLeftLines, GraphicRightLines } from './OurProcessLine'
import shortId from 'shortid'
import OurProcessStep from './OurProcessStep'
import OurProcessIcon from './OurProcessIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OurProcessInfographicDesktop = ({ stepList }) => {
  return (
    <div className='our-process-infographic__desktop-container'>
      <div className='our-process-infographic__desktop-caret-right-container'>
        <div className='our-process-infographic__desktop-caret-container'>
        <FontAwesomeIcon
        className='color-white our-process-infographic__desktop-caret-right'
        icon={'caret-right'}
      />
        </div>
        <div className='our-process-infographic__desktop-caret-container'>
          <FontAwesomeIcon
            className='color-white our-process-infographic__desktop-caret-right'
            icon={'caret-right'}
          />
        </div>
        <div className='our-process-infographic__desktop-caret-container'>
          <FontAwesomeIcon
            className='color-white our-process-infographic__desktop-caret-right'
            icon={'caret-right'}
          />
        </div>
        <div className='our-process-infographic__desktop-caret-container'>
          <FontAwesomeIcon
            className='color-white our-process-infographic__desktop-caret-right'
            icon={'caret-right'}
          />
        </div>
      </div>
      <div className='our-process-infographic__desktop-line'>
      </div>
    <ol
      className='our-process-infographic__ol-container
      background-color-primary
      color-white
      remove-padding-left
      remove-margin'>
      {stepList.map(step=> {
        return (
          <li key={shortId.generate()} className='our-process-infographic__li'>
              <OurProcessIcon icon={step.icon} />
              <div className={`our-process-infographic__text-container ${step.text === 'Contact Us' || step.text === 'Labor' ? 'our-process-infographic__icon-text' : ''}`}>
               <div className='our-process-infographic__text-container--width'>{step.text}</div>
              </div>
          </li>
        )
      })}
    </ol>
    </div>
  )
}

export default OurProcessInfographicDesktop
