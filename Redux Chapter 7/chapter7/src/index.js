import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Locates the HTML node with id 'root' (usually in public/index.html) and initializes the React root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // React.StrictMode is a development-mode tool that highlights potential problems in the application.
  // Note: It intentionally runs components twice to catch side effects, but has no effect on production builds.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring hook (optional)
reportWebVitals();