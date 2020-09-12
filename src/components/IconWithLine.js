import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DecorativeImage from './DecorativeImage'

const IconWithLine = ({ icon }) => {
  return (
    <div className='icon-with-line__container'>
      <div className='icon-with-line__left-line'>
        <hr className='icon-with-line__hr'/>
      </div>
      {Array.isArray(icon) ?
        <FontAwesomeIcon
          className='icon-with-line__fa-icon'
          icon={icon}
        /> : <DecorativeImage
          src={icon}
          className='icon-with-line__icon'
        />}
        <div className='icon-with-line__right-line'>
        <hr className='icon-with-line__hr'/>
      </div>
    </div>
  )
}

export default IconWithLine
