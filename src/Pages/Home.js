import React from 'react'
import shortId from 'shortid'

import BodyHeader from '../components/BodyHeader'
import BodySection from '../components/BodySection'
import LinkCard from '../components/LinkCard'
import Review from '../components/Review'
import VendorSection from '../components/VendorSection'
import ContactForm from '../components/ContactForm'
import BeforeAfterGallerySection from '../components/BeforeAfterGallerySection'
import RemodelImage from '../assets/service-placeholder-man.jpg'
import RepairImage from '../assets/service-placeholder-man-2.jpg'
import RoofingImage from '../assets/service-placeholder-women.jpg'
import SidingImage from '../assets/service-placeholder-women-2.jpg'
import AfterImage from '../assets/before-temp.jpg'
import BeforeImage from '../assets/after-temp.jpg'
import AboutImage from '../assets/group-people.jpg'
import AngiesList from '../assets/angies-list-seal.png'
import HomeAdvisor from '../assets/home-advisor-seal.png'
import BBB from '../assets/bbb-seal.svg'
import BeforeAfter from '../components/BeforeAfter'

const Home = () => {

  const createRandomReview = _ => {
    return {
      name: 'Andrew',
      score: randomReviewNumber(),
      location: 'BFE Anywhere',
      comment: 'Interactively disintermediate process-centric users through clicks-and-mortar bandwidth. Holisticly expedite team building solutions via clicks-and-mortar infomediaries. Compellingly evisculate excellent e-tailers before open-source services. Intrinsicly synergize functional.'
    }
  }

  const beforeAfterImages = [
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage },
    { beforeImage: BeforeImage, afterImage: AfterImage }
  ]

  const randomReviewNumber = _ => {
    return (Math.random() * 5)
  }

  const vendors = [
    { img: AngiesList, id: 'AL', altText: 'Angie\\\'s List Certified seal' },
    { img: HomeAdvisor, id: 'HA', altText: 'Home Advisor Approved Seal' },
    { img: BBB, id: 'bbb', altText: 'Better Business Bureau Accredited Seal' }
  ]

  const reviewsList = [createRandomReview(), createRandomReview(), createRandomReview()]

  return (
    <>
      <BodyHeader/>
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
      <BodySection buttonText='About Us' paddingXRem='0' styleClasses='background-color-primary color-white'
                   title='About Us'>
        <img className='home__about-us--img' src={AboutImage}/>
        <div className='home__about-us-padding-container'>
          <p>
            Third Generation Construction is proud to be a local, Lorain County company.
          </p>
          <p className='p--top-spacing'>
            We believe in using our skills to beautify the community we love and its surrounding areas.
          </p>
        </div>
      </BodySection>
      <BodySection buttonText='View Gallery' paddingXRem='0.5' styleClasses='color-primary' title='Our Work'>
        <p>
          We offer a personal experience for each customer by ensuring every project is unique.
        </p>
        <p className='p--top-spacing p--bottom-margin-40'>
          Let Third Generation Construction transform your current space into the home of your dreams.
        </p>
        <BeforeAfterGallerySection galleryImages={beforeAfterImages}/>
      </BodySection>
      <BodySection paddingXRem='0.5' styleClasses='background-color-primary color-white' title='Contact Us'>
        <ContactForm/>
      </BodySection>
      <BodySection buttonText='Reviews' styleClasses='color-primary' title='Reviews'>
        <div className='home__reviews-container'>
          {reviewsList.map(currentReview => <div className='home__review--spacing'><Review
            key={`home__review-container-${shortId.generate()}`} review={currentReview}/></div>)}
        </div>
      </BodySection>
      <VendorSection vendors={vendors}/>
    </>
  )
}

export default Home
