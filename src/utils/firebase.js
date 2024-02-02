// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflixgpt-46d0a.firebaseapp.com",
  projectId: "netflixgpt-46d0a",
  storageBucket: "netflixgpt-46d0a.appspot.com",
  messagingSenderId: "875884764208",
  appId: "1:875884764208:web:13b1e7ce5cbf429fa1e1f5",
  measurementId: "G-0463QMC6Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();