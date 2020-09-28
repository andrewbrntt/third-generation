import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import BodySection from '../components/BodySection'
import OurProcessInfoGraphic from '../components/OurProcessInfoGraphic'
import AccreditedSitesSection from '../components/AccreditedSitesSection'
import ReviewList from '../components/ReviewList'
import { accreditationSites } from '../DataObjects/socialMediaData'
import { roofReviews } from '../DataObjects/reviewsData'
import OurProcessInfographicDesktop from '../components/OurProcessInfographicDesktop'
import ImageGallerySection from '../components/ImageGallerySection'
import { routesData } from '../DataObjects/routes'
import { useImagesCDN, useImagesCDNSingleStockArt } from '../helpers/useImageCDN'
import { Image } from 'cloudinary-react'

const About = () => {

const [imageGalleryImages, setImageGalleryImages] = useState([])
  const [heroImage, setHeroImage] = useState([])

  const BEFORE = 'before'
  const AFTER = 'after'

  const stepList = [
    { icon: ['far', 'phone-alt'], text: 'Contact Us', srText: 'step 1 contact us', margin: BEFORE },
    { icon: ['far', 'clipboard-list-check'], text: 'Free Inspection & Estimate', srText: 'step 2 we do a free inspection', margin: AFTER, isTextLong: true },
    { icon: ['far', 'file-signature'], text: 'Sign Contract', srText: 'step 3 sign contract' },
    { icon: ['far', 'hammer'], text: 'Labor', srText: 'step 4 labor starts' },
    { icon: ['far', 'star'], text: 'Satisfied Customer', srText: 'step 5 another satisfied customer' }
  ]

  useImagesCDN(setImageGalleryImages, 'group-1')
  useImagesCDNSingleStockArt(setHeroImage,'about-us')

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | About Us</title>
        <meta name="description" content="Third Generation Construction About Us Page"/>
      </Helmet>
      <BodySection linkRoute='/contact' linkText='Contact Us' pageHeader='About Us' styleClasses='color-primary'>
        {heroImage && <Image className='body-section__hero-img' cloudName={process.env.REACT_APP_CDN_CLOUD_NAME} publicId={heroImage.public_id}/>}
        <div className='padding-x-standard body-section--width-965 p--margin-bottom-standard'>
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
      <BodySection styleClasses='background-color-primary color-white body-section--width-full'
                   sectionTitle='Our Process'>
        <OurProcessInfoGraphic stepList={stepList}/>
        <OurProcessInfographicDesktop stepList={stepList}/>
      </BodySection>
      <BodySection styleClasses='color-primary padding-x-standard body-section--width-965'>
        <div className='p--margin-bottom-standard'>
          <p>
            Our work begins and ends with customer satisfaction as our services are customizable to each project.
          </p>
          <p className='p--top-spacing'>
            Third Generation Construction is licensed, bonded, and insured and our team of experts pride themselves on
            the
            quality of work as well as our commitment to outstanding results.
          </p>
        </div>
        <AccreditedSitesSection containerStyleClasses='body-section--width-965' accreditationSites={accreditationSites}/>
      </BodySection>
      <BodySection linkRoute='/our-work' styleClasses='background-color-primary color-white body-section--width-full'
                   linkText='View Gallery'
                   sectionTitle='Our Work'>
        <div className='padding-x-standard p--margin-bottom-standard body-section--width-965'>
          <p>
            We're proud of our work and love showing it off.
          </p>
          <p className='p--top-spacing'>Let Third Generation Construction transform your current space into
            the home of
            your dreams.
          </p>
        </div>
        <ImageGallerySection images={imageGalleryImages}/>
      </BodySection>
      <BodySection sectionTitle='Reviews' linkText={routesData.reviews.routeName} linkRoute={routesData.reviews.routeTo}
                   styleClasses='body-section__reviews-section--padding color-primary padding-x-standard'>
        <div className='p--margin-bottom-standard'>
          <ReviewList reviewsList={roofReviews}/>
        </div>
      </BodySection>
    </>
  )
}

export default About
