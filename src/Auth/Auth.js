// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpv8z_HcicT6ommK6JBEDEPRlyOXTxteI",
  authDomain: "coffee-khabo-87efb.firebaseapp.com",
  projectId: "coffee-khabo-87efb",
  storageBucket: "coffee-khabo-87efb.firebasestorage.app",
  messagingSenderId: "705954289207",
  appId: "1:705954289207:web:835d4d22e5573d769211b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
