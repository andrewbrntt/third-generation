import React from 'react'
import { Link } from 'react-router-dom'

const CovidBanner = () => {
  return (
      <div className='covid-banner__container'>
        COVID Concerns?
        <span>Read our <Link to='/covid'>COVID Safety rules</Link></span>
      </div>
  )
}

export default CovidBanner
