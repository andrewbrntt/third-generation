import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import SkipLink from './Components/SkipLink'
import Footer from './Components/Footer'

function App () {
  return (
    <>
      <header className=''>
        <SkipLink />
        <Header />
      </header>
      <main className=''>
        <h1 id='main-content'>Main Body</h1>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}

export default App
