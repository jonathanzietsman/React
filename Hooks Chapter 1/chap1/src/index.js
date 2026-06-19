// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import global styles for the application
import './index.css';

// Import the root App component
import App from './App';

// Import performance measuring utility
import reportWebVitals from './reportWebVitals';

// Target the root HTML element in 'public/index.html' and create the React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application UI inside the strict mode wrapper
root.render(
  // StrictMode is a development tool that highlights potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Performance Monitoring
 * To start measuring performance in your app, pass a function to log results 
 * (for example: reportWebVitals(console.log)) or send to an analytics endpoint. 
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();