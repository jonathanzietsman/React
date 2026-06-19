import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Imports compiled Bootstrap stylesheet variables layout to enable class styles application globally
import 'bootstrap/dist/css/bootstrap.min.css';

// Targets structural root HTML element insertion placeholder target point within index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // StrictMode wrapper runs supplementary development-only tracking checks over underlying child elements
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Triggers performance reporting metrics pipeline engine
reportWebVitals();