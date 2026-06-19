import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

// Locate the HTML element where the React app will be mounted
var destination = document.querySelector("#container");

// Create the global Redux store by passing in the reducer function.
// This store holds the entire state tree of your application.
var store = createStore(cartReducer);

// Initialize the React 18 root API
const root = createRoot(destination);

// Render the application. 
// The <Provider> component wraps the entire app and makes the Redux store 
// available to any nested components that use the connect() function.
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);