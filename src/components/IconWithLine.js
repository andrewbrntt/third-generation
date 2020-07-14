import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
  '--fa-primary-color': 'red',
  '--fa-secondary-color': 'blue',
  '--fa-primary-opacity': 1,
  '--fa-secondary-opacity': 1
}

const IconWithLine = () => {
  return (
    <div className='icon-with-line__container'>
      {/*I want the hr to drop down not the tools to come up*/}
      <hr className='icon-with-line__hr' />
      <FontAwesomeIcon
        className='icon-with-line__icon'
        // style={style}
        icon={['fad', 'tools']}
      />
    </div>
  )
}

export default IconWithLine
