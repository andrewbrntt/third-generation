import React from 'react'
import { Route, Switch } from 'react-router-dom'
import fontAwesomeLibrary from './helpers/fontAwesomeLibrary'
import './Styles/base/_app.scss'
import SkipLink from './components/SkipLink'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Roofing from './Pages/Roofing'
import Siding from './Pages/Siding'
import Contact from './Pages/Contact'
import Repairs from './Pages/Repairs'
import Banner from './components/Banner'
import Remodel from './Pages/Remodel'
import MobileNavigationMenu from './components/MobileNavigationMenu'
import OurWork from './Pages/OurWork'
import Reviews from './Pages/Reviews'
import EmergencyService from './Pages/EmergencyService'
import Services from './Pages/Services'
import Test from './Pages/Test'

fontAwesomeLibrary()

function App () {
  return (
    <>
      <header className='background-color-primary mobile-header'>
        <SkipLink/>
        <Banner/>
        <MobileNavigationMenu styleClasses='header__mobile-navigation'/>
      </header>
      <main id='main-content'>
        <Switch>
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
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/emergency-service'>
            <EmergencyService/>
          </Route>
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
      <footer id='footer-content' className='footer background-color-primary'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
