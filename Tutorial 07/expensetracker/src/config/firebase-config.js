// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM922s4eVF-6MZ2xSGF5PVr3rfygKOyak",
  authDomain: "expense-tracker-3d8c8.firebaseapp.com",
  projectId: "expense-tracker-3d8c8",
  storageBucket: "expense-tracker-3d8c8.firebasestorage.app",
  messagingSenderId: "668426560963",
  appId: "1:668426560963:web:a60537f8f3a058e472c976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);