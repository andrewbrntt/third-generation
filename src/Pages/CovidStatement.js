import React from 'react'
import BodySection from '../Components/BodySection'
import ExternalLink from '../Components/ExternalLink'
import { Helmet } from 'react-helmet-async'

const CovidStatement = () => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>3rd Generation Construction | COVID Policy</title>
        <meta name='description' content='Third Generation Construction COVID Policy Page' />
      </Helmet>
      <BodySection pageHeader='Our COVID Policy:'
                   styleClasses='padding-x-standard body-section--width-965 p--margin-bottom-standard covid__container color-primary'>
        <p>
          Third Generation construction considers our customers’ health and safety our top priority while still
          offering
          the high-quality services our customers deserve. Because of the unprecedented nature of the COVID-19 virus,
          we
          have taken the following precautions recommended by the <ExternalLink styleClasses='color-secondary'
                                                                                routeTo='https://www.cdc.gov/'>Centers
          of Disease Control (CDC)</ExternalLink> and other health
          organizations including:</p>
        <h2>Mask Policy</h2>
        <ul>
          <li>Team members are required to maintain the minimum distance of 6 feet from any non-team member unless in
            the rare case they must be closer to a client they will only come as close as needed
          </li>
          <li>Anytime a team member is in your home, or within 6 feet of a client, they are required to wear a
            properly
            fitting mask
          </li>
          <li>Employees can remove their face covers in the rare case the situation requires it.</li>
        </ul>
        <h2>Sanitation Policy</h2>
        <ul>
          <li>
            Every team member will have access to antibacterial hand sanitizer and are required to use it before, and
            after each time they enter or exit your home.
          </li>
          <li>
            In the rare case, a team member does not have access to antibacterial hand sanitizer; they are required to
            clean their hand with soap for at least 20 seconds before and after contact.
          </li>
        </ul>
        <h2>Temperature Checks</h2>
        <ul>
          <li>
            Using contact-free infrared thermometers, we will be taking our staff’s temperature every day on arrival to
            work.
          </li>
          <li>Staff members will have their temperatures taken when they arrive for work.</li>
          <li>Employees with temperatures above the CDC or state/local threshold will not be permitted to work.</li>
          <li>Every day before they begin working, we’ll ask our team members if they have experienced symptoms of
            COVID-19 or have been in close contact with someone who has tested positive or presumed positive with
            COVID-19.
          </li>
        </ul>
        <p className='p--top-spacing'>
          If a Third Generation employee has come in contact with or has symptoms of COVID, we require all employees to
          be tested immediately to ensure our crew and customers’ safety.
        </p>
        <p className='p--top-spacing'>
          While our team members will be taking every
          precaution needed to mitigate the risk of spread, we would ask our customers to read the following CDC
          recommended guidelines for <ExternalLink styleClasses='color-secondary'
                                                   routeTo='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/at-home/in-home-services.html'>In-Home
          Services or Repairs
        </ExternalLink>.
        </p>
        <p className='p--top-spacing'>
          If you have any concerns or need us to take special precautions, please feel free to contact us before the day
          of your appointment to make arrangements.
        </p>
        <p className='p--top-spacing'>
          Thank you for helping us keep delivering the quality work each
          customer deserves. We will continue to closely monitor the situation and adjust our policies according to the
          latest safety recommendations set forth by the CDC and other health organizations.
        </p>
      </BodySection>
    </>
  )
}

export default CovidStatement
