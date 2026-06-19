// Beginning React (Greg Lim) — Chapter 4: Application entry point

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styles for the application
import App from './App'; // Import the main root component
import reportWebVitals from './reportWebVitals'; // Performance monitoring tool

// 1. Target the 'root' div element inside your public/index.html file.
// 2. Create the React root entry point using the new React 18+ createRoot API.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application UI tree inside the React root element.
root.render(
  // React.StrictMode is a development-only wrapper that helps catch bugs early by 
  // double-rendering components and warning about deprecated practices.
  <React.StrictMode>
    <App /> {/* The top-level component that kicks off our app UI */}
  </React.StrictMode>
);

// Optional: Measures application performance (e.g., page load speeds, render times).
reportWebVitals();