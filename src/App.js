import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import SkipLink from './components/SkipLink'
import Footer from './components/Footer'
import Home from './Pages/Home'
import TestPage from './Pages/TestPage'
import About from './Pages/About'
import Roofing from './Pages/Roofing'
import Siding from './Pages/Siding'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App () {
  return (
    <>
      <header className='w3-container background-color-primary'>
        <SkipLink/>
        <Header/>
      </header>
      <main id='main-content' className='w3-container remove-padding'>
        <Switch>
          <Route path='/test'>
              <TestPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/roofing'>
            <Roofing />
          </Route>
          <Route path='/siding'>
            <Siding />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </main>
      <footer className='w3-container background-color-primary'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
