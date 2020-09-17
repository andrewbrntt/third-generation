import React from 'react'
import { NavLink } from 'react-router-dom'

const ThemedLink = ({ styleClasses, text, route }) => {
  return (
    <NavLink to={{ pathname: route, state: { navIsOpen: false } }}
             className={`themed-link action-text ${styleClasses || ''}`}>
      <span className='themed-link__hr-container'>
              {text}
        <hr className='themed-link__hr remove-margin'/>
      </span>
    </NavLink>
  )
}

export default ThemedLink
