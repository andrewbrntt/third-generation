import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconWithLine from '../components/IconWithLine'

const Remodel = () => {
  return (
    <>
      <BodySection buttonText='Contact Us' pageHeader='Remodel'>
        <img className='remodel__hero--img' src={AboutImage}/>
        <p>
          Whether you’re updating your kitchen or upgrading your basement into the ultimate man cave, Third Generation
          Construction is here.
        </p>
        <p className='p--top-spacing'>
          We pride ourselves in using quality products to create beautiful projects at an
          affordable price.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' title='Free Consultation'>
        <IconWithLine />
      </BodySection>
    </>
  )
}

export default Remodel
