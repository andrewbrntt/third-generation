import React from 'react'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__ul'>
        <li className='navigation__li'>
          <a className='navigation__li-anchor' href='#'>About</a>
        </li>
        <li aria-hidden='true' className='navigation__li'>
          <span className='navigation__span-separator'>|</span>
        </li>
        <li className='navigation__li'>
          <a className='navigation__li-anchor' href='#'>Roofing</a>
        </li>
        <li aria-hidden='true' className='navigation__li'>
          <span className='navigation__span-separator'>|</span>
        </li>
        <li>
          <a className='navigation__li-anchor' href='#'>Siding</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
