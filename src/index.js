import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './3d.js'
import Spline from '@splinetool/react-spline'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);