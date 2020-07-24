import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import OurProcessInfoGraphic from '../components/OurProcessInfoGraphic'
import AngiesList from '../assets/angies-list-seal.png'
import HomeAdvisor from '../assets/home-advisor-seal.png'
import BBB from '../assets/bbb-seal.svg'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ReviewList from '../components/ReviewList'

const About = () => {

  const stepList = [
    { icon: ['far', 'phone-alt'], text: 'Contact Us' },
    { icon: ['far', 'clipboard-list-check'], text: 'Free Inspection' },
    { icon: ['far', 'file-contract'], text: 'Sign Contract' },
    { icon: ['far', 'hammer'], text: 'Labor' },
    { icon: ['far', 'star'], text: 'Satisfied Customer' }
  ]

  const reviewSites = [
    { img: AngiesList, id: 'AL', altText: 'Angie\\\'s List Certified seal' },
    { img: HomeAdvisor, id: 'HA', altText: 'Home Advisor Approved Seal' },
    { img: BBB, id: 'bbb', altText: 'Better Business Bureau Accredited Seal' }
  ]
  return (
    <>
      <BodySection buttonText='Contact Us' pageHeader='About Us'>
        <img className='remodel__hero--img' src={AboutImage}/>
        <p>
          Third Generation Construction is a family-owned and operated business serving Lorain County and its
          surrounding
          areas.
        </p>
        <p className='p--top-spacing'>
          Our team of professionals has more than 15-years of experience values honesty and integrity and treats your
          home or business as if it were our own.
        </p>
        <p className='p--top-spacing'>
          We look forward to building lasting relationships and guarantee your
          satisfaction.
        </p>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' sectionTitle='Our Process'>
        <OurProcessInfoGraphic stepList={stepList}/>
      </BodySection>
      <BodySection paddingXRem='0.5'>
        <p>
          Our work begins and ends with customer satisfaction as our services are customizable to each project.
        </p>
        <p className='p--top-spacing'>
          Third
          Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on the
          quality of work as well as our commitment to outstanding results.
        </p>
        <ReviewSitesSection reviewSites={reviewSites}/>
      </BodySection>
      <BodySection styleClasses='background-color-primary color-white' buttonText='View Gallery' sectionTitle='Our Work'>
        <img className='remodel__hero--img' src={AboutImage}/>
        <p className='padding-x-8'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing padding-x-8'>Let Third Generation Construction transform your current space into the home of
          your dreams.
        </p>
      </BodySection>
      <BodySection sectionTitle='Reviews' styleClasses='color-primary' paddingXRem='0.5'>
        <ReviewList randomCount='1' />
      </BodySection>
    </>
  )
}

export default About
