import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import Banner from '../components/Banner'
import LinkCard from '../components/LinkCard'
import ThemeButton from '../components/ThemeButton'
import ThirdSuperScript from '../components/ThirdSuperScript'
import RemodelImage from '../assets/service-placeholder-man.jpg'
import RepairImage from '../assets/service-placeholder-man-2.jpg'
import RoofingImage from '../assets/service-placeholder-women.jpg'
import SidingImage from '../assets/service-placeholder-women-2.jpg'
import AfterImage from '../assets/before-temp.jpg'
import BeforeImage from '../assets/after-temp.jpg'
import CardImage from '../assets/mobile-wide-kitchen-stock.jpg'
import AboutImage from '../assets/group-people.jpg'
import Review from '../components/Review'
import BeforeAfter from '../components/BeforeAfter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <>
      <BodyHeader/>
      <Banner/>
      <BodySection styleClasses='color-primary' title='Our Services'>
        <div className='default-text body-section__p-container body-section__text'>
        <p>
          Whatever your home needs. Third Generation Construction can help.
        </p>
        <p className='p--top-spacing'>
          We offer quality home remodeling and roofing services from a team with more than 15 years of experience.
        </p>
        </div>
        <div className='home__service-cards-container home__service-cards--margin-bottom'>
          <LinkCard urlPath='remodel' imgSrc={RemodelImage} cardTitle='Remodel'/>
          <LinkCard urlPath='roofing' imgSrc={RoofingImage} cardTitle='Roofing'/>
        </div>
        <div className='home__service-cards-container'>
          <LinkCard urlPath='siding' imgSrc={SidingImage} cardTitle='Siding'/>
          <LinkCard urlPath='repairs' imgSrc={RepairImage} cardTitle='Repairs'/>
        </div>
      </BodySection>
      <BodySection paddingXRem='0' styleClasses='background-color-primary color-white' title='About Us'>
        <img className='home__about-us--img' src={AboutImage}/>
        <div className='home__about-us-padding-container'>
        <p>
          Third Generation Construction is proud to be a local, Lorain County company.
        </p>
        <p className='p--top-spacing'>
          We believe in using our skills to beautify the community we love and its surrounding areas.
        </p>
        </div>
        <div className='home__button-container--spacing'>
          <ThemeButton text='About Us'/>
        </div>
      </BodySection>
      <BodySection paddingXRem='0.5' styleClasses='color-primary' title='Our Work'>
        <p>
          We offer a personal experience for each customer by ensuring every project is unique.
        </p>
        <p className='p--top-spacing our-work__p--bottom-margin-40'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        <div className='home__before-after'>
          <BeforeAfter beforeSrc={BeforeImage} afterSrc={AfterImage}/>
        </div>
        <div className='home__before-after'>
          <BeforeAfter beforeSrc={BeforeImage} afterSrc={AfterImage}/>
        </div>
        <div className='home__before-after'>
          <BeforeAfter beforeSrc={BeforeImage} afterSrc={AfterImage}/>
        </div>
        <div className='home__button-container--spacing'>
          <ThemeButton text='View Gallery'/>
        </div>
      </BodySection>
      <BodySection styleClasses='color-primary' title='Reviews'>
        <Review/>
        {/*<Review  />*/}
        {/*<Review />*/}
        {/*<Review />*/}
      </BodySection>
    </>
  )
}

export default Home
