import React from 'react'
import { NavLink } from 'react-router-dom'

const ThemedLink = ({ styleClasses, text, route }) => {
  return (
    <NavLink to={{ pathname: route, state: { navIsOpen: false } }}
             className={`themed-link action-text ${styleClasses || ''}`}>
      {text}
      <span className='themed-link__hr-container'>
        <hr className='themedd-link__hr remove-margin'/>
      </span>
    </NavLink>
  )
}

export default ThemedLink
