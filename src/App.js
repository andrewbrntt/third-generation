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
import OurWork from './Pages/OurWork'
import Reviews from './Pages/Reviews'
import EmergencyService from './Pages/EmergencyService'
import Test from './Pages/Test'
import Header from './components/Header'

fontAwesomeLibrary()

function App () {
  return (
    <>
      <header className='background-color-primary'>
        <SkipLink/>
        <Banner/>
        <Header/>
      </header>
      <main id='main-content'>
        <div className='main-content__container'>
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
            <Route path='/emergency-service'>
              <EmergencyService/>
            </Route>

            // TODO: Remove this before prod
            <Route path='/test'>
              <Test/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </main>
      <footer id='footer-content' className='footer background-color-primary'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
