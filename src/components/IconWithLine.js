import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DecorativeImage from './DecorativeImage'

const IconWithLine = ({icon}) => {
  return (
    <div className='icon-with-line__container'>
      <hr className='icon-with-line__hr' />
      {Array.isArray(icon) ?
      <FontAwesomeIcon
        className='icon-with-line__fa-icon'
        icon={icon}
      /> : <DecorativeImage
          src={icon}
          className='icon-with-line__icon'
        />}
    </div>
  )
}

export default IconWithLine
