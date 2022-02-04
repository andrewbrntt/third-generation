import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import fontAwesomeLibrary from './Helpers/fontAwesomeLibrary'
import './Styles/base/_app.scss'

import CovidBanner from './Components/COVIDBanner'
import SkipLink from './Components/SkipLink'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GALLERY_NAMES } from './Helpers/GLOBAL_DEFS'

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
const CovidStatement = lazy(() => import('./Pages/CovidStatement'))

fontAwesomeLibrary()

function App () {
  const loadingIcon = <div className='app-load-spinner'>
    <FontAwesomeIcon className='modal__times-icon color-primary' icon={['far', 'spinner-third']} spin={true}/>
  </div>

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>3rd Generation Construction | Home</title>
        <meta name="description" content="Third Generation Construction Home Page"/>
      </Helmet>
      <header className='background-color-primary'>
        <SkipLink/>
        <CovidBanner />
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
            <Route path='/basement-photos'>
              <OurWork gallery={GALLERY_NAMES.BASEMENT}/>
            </Route>
            <Route path='/bathroom-photos'>
              <OurWork gallery={GALLERY_NAMES.BATHROOM}/>
            </Route>
            <Route path='/kitchen-photos'>
              <OurWork gallery={GALLERY_NAMES.KITCHEN}/>
            </Route>
            <Route path='/roofing-photos'>
              <OurWork gallery={GALLERY_NAMES.ROOFING}/>
            </Route>
            <Route path='/whole-home-photos'>
              <OurWork gallery={GALLERY_NAMES.WHOLE_HOME}/>
            </Route>
            <Route path='/other-photos'>
              <OurWork gallery={GALLERY_NAMES.OTHER}/>
            </Route>
            <Route path='/reviews'>
              <Reviews/>
            </Route>
            <Route path='/emergency-service'>
              <EmergencyService/>
            </Route>
            <Route path='/covid'>
              <CovidStatement/>
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
