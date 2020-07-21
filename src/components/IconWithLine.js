import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconWithLine = ({icon}) => {
  return (
    <div className='icon-with-line__container'>
      <hr className='icon-with-line__hr' />
      {Array.isArray(icon) ?
      <FontAwesomeIcon
        className='icon-with-line__fa-icon'
        icon={icon}
      /> : <img
          src={icon}
          alt=''
          className='icon-with-line__icon'
        />}
    </div>
  )
}

export default IconWithLine
