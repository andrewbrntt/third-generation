import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterSection = ({ header, listItems }) => {
  return (
    <div className='footer__section'>
      <h3 className='footer__section-title--margin'>{header}</h3>
      {listItems &&
      <ul className='footer__ul'>
        {listItems.map(item => <li key={item}><NavLink className='footer__link' to={`/${item.toLowerCase()}`}>{item}</NavLink></li>)}
      </ul>
      }
    </div>
  )
}

export default FooterSection
