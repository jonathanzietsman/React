// Beginning React (Greg Lim) — Chapter 1: Application entry point
// This file connects our React app to the HTML page (public/index.html has <div id="root">).

// Import the core React library to support JSX and component management.
import React from 'react';

// Import ReactDOM's client package, which provides the tools needed to render React components into the browser DOM.
import ReactDOM from 'react-dom/client';

// Import global CSS styles to style the application.
import './index.css';

// Import our custom 'App' component from the App.js file in the same directory.
import App from './App';

// Import a utility function to measure and log the performance of the app (optional).
import reportWebVitals from './reportWebVitals';

// 1. Locate the HTML element with the ID of 'root' inside public/index.html.
// 2. Initialize a modern React 18 root container ('ReactDOM.createRoot') at that location.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the newly created root to render our React component tree into the real browser DOM.
root.render(
  // <React.StrictMode> is a development-only wrapper tool. 
  // It activates additional checks and warnings for potential problems in the code.
  <React.StrictMode>
    {/* Render our main component inside StrictMode */}
    <App />
  </React.StrictMode>,
);

// Call the performance tracking function. You can pass a function (e.g., console.log) to analyze results.
reportWebVitals();