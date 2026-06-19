// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBvfpQ4VolP2MAAdBTRUkFfFp1PW1eMRHM",
	authDomain: "devpulse-b73ab.firebaseapp.com",
	projectId: "devpulse-b73ab",
	storageBucket: "devpulse-b73ab.firebasestorage.app",
	messagingSenderId: "502590627529",
	appId: "1:502590627529:web:1fa06302d713d783127718",
	measurementId: "G-JVYD46KBP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
