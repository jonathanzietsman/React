import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Locates the HTML container div id="root" and initializes the React Virtual DOM tree 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode triggers extra development-only checks to catch bugs early
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring framework hook (optional)
reportWebVitals();