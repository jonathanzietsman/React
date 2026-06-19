import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Target the physical HTML div with the ID 'root' (found in public/index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Inject and render our React App component into that root container
root.render(
  // StrictMode is a development tool that highlights potential problems in an application.
  // Note: It intentionally double-renders components in dev mode to catch side-effects!
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitals measures performance metrics. You can pass a function (like console.log) to track them.
reportWebVitals();