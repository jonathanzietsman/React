import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Locates the <div id="root"></div> in your public/index.html file and creates the React root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // React.StrictMode is a development-only tool that highlights potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();