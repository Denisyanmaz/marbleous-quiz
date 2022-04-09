import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
