// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogg-app-22c35.firebaseapp.com",
  projectId: "blogg-app-22c35",
  storageBucket: "blogg-app-22c35.appspot.com",
  messagingSenderId: "110450778989",
  appId: "1:110450778989:web:8c57caf5b65a5d3e2a3064"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

