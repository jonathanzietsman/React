import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Create the root node targeting the HTML container element with an ID of 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Render the application UI tree inside the established root node
root.render(
  // React.StrictMode is a wrapper utility that activates extra checks and warnings 
  // during development to find potential bugs (it does not render any visible UI).
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();