import React from 'react'
import BodySection from '../components/BodySection'
import AboutImage from '../assets/group-people.jpg'
import OurProcessInfoGraphic from '../components/OurProcessInfoGraphic'
import ReviewSitesSection from '../components/ReviewSitesSection'
import ReviewList from '../components/ReviewList'
import DecorativeImage from '../components/DecorativeImage'
import { reviewSites } from '../helpers/mockData'

const About = () => {

  const stepList = [
    { icon: ['far', 'phone-alt'], text: 'Contact Us', srText: 'step 1 contact us' },
    { icon: ['far', 'clipboard-list-check'], text: 'Free Inspection', srText: 'step 2 we do a free inspection'},
    { icon: ['far', 'file-contract'], text: 'Sign Contract', srText: 'step 3 sign contract' },
    { icon: ['far', 'hammer'], text: 'Labor', srText: 'step 4 labor starts' },
    { icon: ['far', 'star'], text: 'Satisfied Customer', srText: 'step 5 another satisfied customer' }
  ]

  return (
    <>
      <BodySection linkText='Contact Us' pageHeader='About Us'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <div className='padding-x-standard'>
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
        </div>
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
      <BodySection styleClasses='background-color-primary color-white' linkText='View Gallery'
                   sectionTitle='Our Work'>
        <DecorativeImage className='remodel__hero--img' src={AboutImage}/>
        <p className='padding-x-standard'>
          We're proud of our work and love showing it off.
        </p>
        <p className='p--top-spacing padding-x-standard'>Let Third Generation Construction transform your current space into
          the home of
          your dreams.
        </p>
      </BodySection>
      <BodySection sectionTitle='Reviews' styleClasses='color-primary' paddingXRem='0.5'>
        <ReviewList randomCount='1'/>
      </BodySection>
    </>
  )
}

export default About
