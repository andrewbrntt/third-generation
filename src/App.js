import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import fontAwesomeLibrary from './helpers/fontAwesomeLibrary'
import './Styles/base/_app.scss'

import SkipLink from './components/SkipLink'
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Roofing = lazy(() => import('./Pages/Roofing'))
const Siding = lazy(() => import('./Pages/Siding'))
const Contact = lazy(() => import('./Pages/Contact'))
const Repairs = lazy(() => import('./Pages/Repairs'))
const OurWork = lazy(() => import('./Pages/OurWork'))
const Remodel = lazy(() => import('./Pages/Remodel'))
const Reviews = lazy(() => import('./Pages/Reviews'))
const EmergencyService = lazy(() => import('./Pages/EmergencyService'))
const Error = lazy(() => import('./Pages/Error'))

fontAwesomeLibrary()

function App () {
  const loadingIcon = <FontAwesomeIcon className='modal__times-icon' icon={['far', 'spinner-third']} spin='spin'/>
  
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Home</title>
        <meta name="description" content="Third Generation Construction Home Page"/>
      </Helmet>
      <header className='background-color-primary'>
        <SkipLink/>
        <Banner/>
        <Header/>
      </header>
      <main id='main-content'>
        <Suspense fallback={loadingIcon}>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/roofing'>
              <Roofing/>
            </Route>
            <Route path='/remodel'>
              <Remodel/>
            </Route>
            <Route path='/siding'>
              <Siding/>
            </Route>
            <Route path='/repairs'>
              <Repairs/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Route path='/our-work'>
              <OurWork/>
            </Route>
            <Route path='/reviews'>
              <Reviews/>
            </Route>
            <Route path='/emergency-service'>
              <EmergencyService/>
            </Route>
            <Route path='*'>
              <Error/>
            </Route>
          </Switch>
        </Suspense>
      </main>
      <footer id='footer-content' className='footer background-color-primary'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
