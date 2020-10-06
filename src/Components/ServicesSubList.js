import React from 'react'

const ServicesSubList = () => {
  return (
    <div className='background-color-white remodel__services'>
      We offer a wide variety of services that can help you improve your home.
      <hr className='remodel__services-hr' />
      <ul className='remodel__services-list'>
        <li className='remodel__services-list-item'>Windows</li>
        <li className='remodel__services-list-item'>Drywall</li>
        <li className='remodel__services-list-item'>
          Flooring
        </li>
        <li>
          <ul className='remodel__services-flooring-sub-list'>
            <li className='remodel__services-flooring-sub-list-item'>Hardwood</li>
            <li className='remodel__services-flooring-sub-list-item'>Vinyl/Laminate</li>
            <li className='remodel__services-flooring-sub-list-item'>Tile</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ServicesSubList
