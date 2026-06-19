import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Entry-point Root Mounting Node:
Initializes the target DOM structure via 'document.getElementById('root')' 
where the compiled single-page React UI bundle attaches inside the host browser environment.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* <React.StrictMode>:
  Development-mode sanity check tool. It intentionaly re-renders components twice 
  to flag side-effects, memory leaks, or outdated API use. Has no effect on production builds.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring instrumentation script hooks
reportWebVitals();