import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");

var store = createStore(cartReducer);

const root = createRoot(destination);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);