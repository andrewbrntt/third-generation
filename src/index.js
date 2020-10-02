import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import 'normalize.css';
import './Styles/main.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <HelmetProvider>
      <App/>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
