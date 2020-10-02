import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DecorativeImage from './DecorativeImage'

const IconWithLine = ({ icon }) => {

  const centerItem = () => {
    if (icon) {
      if (Array.isArray(icon)) {
        return (
          <FontAwesomeIcon
            className='icon-with-line__fa-icon'
            icon={icon}
          />
        )
      } else {
        return (
          <DecorativeImage
            src={icon}
            className='icon-with-line__icon'
          />
        )
      }
    } else {
      return (
        <h1 className='icon-with-line__center-text'>404</h1>
      )
    }
  }

  return (
    <div className='icon-with-line__container p--margin-bottom-standard'>
      <div className='icon-with-line__left-line'>
        <hr className='icon-with-line__hr'/>
      </div>
      {centerItem(icon)}
      <div className='icon-with-line__right-line'>
        <hr className='icon-with-line__hr'/>
      </div>
    </div>
  )
}

export default IconWithLine
