// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'
import App from '../components/App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Router>
      <Routes>
        <Route path="*" element={<App />}/>
      </Routes>
    </Router>
  )
})
