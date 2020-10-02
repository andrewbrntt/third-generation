import React from 'react'
import { NavLink } from 'react-router-dom'
import shortId from 'shortid'

const FooterSection = ({ header, listItems }) => {
  return (
    <div className='footer-section'>
      <h3 className='footer-section__heading'>{header}</h3>
      {listItems &&
      <ul className='footer__ul footer__subsection-list'>
        {listItems.map(item => <li key={shortId.generate()}>
          <NavLink className='footer__link' to={item.routeTo}>
            {item.routeName}
          </NavLink>
        </li>)}
      </ul>
      }
    </div>
  )
}

export default FooterSection
