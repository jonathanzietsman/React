import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Global inclusion of Bootstrap CSS framework styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Firebase initialization dependencies
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Web app Firebase configuration object containing credential values pointing to your console instance
const firebaseConfig = {
    apiKey: "AIzaSyCmaWpyNF7wsZjmzbMokJa9iE-H_JBf2fc",
    authDomain: "chapter9reactredux.firebaseapp.com",
    databaseURL:
        "https://chapter9reactredux-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chapter9reactredux",
    storageBucket: "chapter9reactredux.firebasestorage.app",
    messagingSenderId: "557172845200",
    appId: "1:557172845200:web:2ac9ffec2eebca46d20615",
    measurementId: "G-VY799M2MKS",
};

// Instantiates the singleton client instance of Firebase across your application execution context
firebase.initializeApp(firebaseConfig);

// Mounts the virtual React tree onto the target actual HTML physical node element wrapper
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// Performance analytics logger utility hook
reportWebVitals();