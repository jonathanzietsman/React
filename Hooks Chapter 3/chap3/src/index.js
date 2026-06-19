import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Target the HTML element with id 'root' (found in public/index.html) as the entry point for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component inside React.StrictMode
// StrictMode triggers extra development-only checks and warnings to help catch bugs early
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();