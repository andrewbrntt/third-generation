import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as faStarSolid, faStarHalfAlt } from '@fortawesome/pro-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/pro-regular-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './App.css'
import Header from './components/Header'
import SkipLink from './components/SkipLink'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Roofing from './Pages/Roofing'
import Siding from './Pages/Siding'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Repairs from './Pages/Repairs'
import Banner from './components/Banner'

library.add(faStarSolid, faStarHalfAlt, faStarRegular, faFacebook, faInstagram)

function App () {
  return (
    <>
      <header className='background-color-primary'>
        <SkipLink/>
        <Banner/>
        <Header/>
      </header>
      <main id='main-content'>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/roofing'>
            <Roofing/>
          </Route>
          <Route path='/siding'>
            <Siding/>
          </Route>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/repairs'>
            <Repairs/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
      <footer className='footer background-color-primary'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
