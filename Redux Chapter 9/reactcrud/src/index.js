import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//firebase dependancies
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
