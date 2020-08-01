import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './index.css'
import './Styles/main.scss'
import App from './App'

function ScrollToTop () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// noinspection JSCheckFunctionSignatures
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
