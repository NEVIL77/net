// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwigJozExt4gnrDSNjwe-Lnl6xPbTIPuE",
  authDomain: "netflixgpt-f63dc.firebaseapp.com",
  projectId: "netflixgpt-f63dc",
  storageBucket: "netflixgpt-f63dc.appspot.com",
  messagingSenderId: "477884070036",
  appId: "1:477884070036:web:54937b8bcc64717bb5dc81",
  measurementId: "G-VHZSY648J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);