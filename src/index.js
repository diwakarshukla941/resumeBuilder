import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './containers';
import "./index.css";


const root  = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
)