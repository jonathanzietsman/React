import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Finds the div with id='root' in your public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the React component tree into the DOM
root.render(
  // StrictMode is a development tool that highlights potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring function (optional)
// Pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();