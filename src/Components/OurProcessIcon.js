import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OurProcessIcon = ({ icon, styleClass }) => {
  return (
    <span className={`fa-layers fa-fw our-process-infographic__circle ${styleClass || ''}`}>
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

export default OurProcessIcon
