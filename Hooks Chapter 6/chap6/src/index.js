import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global custom application stylesheets
import App from './App'; // Root component of the application
import reportWebVitals from './reportWebVitals';

// Initialize the React virtual DOM root targeting the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in StrictMode to catch potential bugs and deprecated lifecycle practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring helper hook (can log results to console or analytics endpoints)
reportWebVitals();