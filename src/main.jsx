import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {BlogProvider,BlogContext} from './BlogContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BlogProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </BlogProvider>
    
  </React.StrictMode>,
)
