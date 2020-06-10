import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import Banner from '../components/Banner'
import LinkCard from '../components/LinkCard'
import CardImage from '../assets/mobile-wide-kitchen-stock.jpg'
import ThemeButton from '../components/ThemeButton'


const Home = () => {
  return (
    <>
      <BodyHeader/>
      <Banner />
      <BodySection styleClasses='home__services--color' title='Our Services'>
        <p className='body-section__text'>
          Whatever your home needs. 3RD Generation Construction can help.
        </p>
        <p className='body-section__text'>
          We offer quality home remodeling and roofing
          services from a team with more than 15 years of experience.
        </p>
        <div className='home__service-cards-container'>
          <div className='w3-row'>
            <div className='w3-half w3-container home__service-card'>
              <LinkCard imgSrc={CardImage} cardTitle='Remodel' />
            </div>
            <div className='w3-half w3-container home__service-card'>
              <LinkCard imgSrc={CardImage} cardTitle='Roofing' />
            </div>
            <div className='w3-half w3-container home__service-card'>
              <LinkCard imgSrc={CardImage} cardTitle='Siding' />
            </div>
            <div className='w3-half w3-container home__service-card'>
              <LinkCard imgSrc={CardImage} cardTitle='Repairs' />
            </div>
          </div>
        </div>
      </BodySection>
      <BodySection styleClasses='background-color-primary home__about-us--color' title='About Us'>
        <p className='body-section__text'>
          3RD Generation Construction is proud to be a local, Lorain County Company.
        </p>
        <p className='body-section__text'>
          We believe in using our skills to beautify the community we love and its surrounding areas.
        </p>
        <ThemeButton text='About Us' />
      </BodySection>
      <BodySection styleClasses='home__about-us--color' title='About Us'>
      </BodySection>
    </>
  )
}

export default Home
