import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Global inclusion of standard Bootstrap CSS blueprints

// Locate standard HTML element node root and initialize the modern React 18 rendering tree
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode activates local verification checkups to identify side-effects or deprecated lifecycle hooks
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Performance metric tracker tool (can capture analytics like page layout shift, speed indexes, etc.)
reportWebVitals();