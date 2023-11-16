// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl2HwK5U3mi6QJZamIjhQsu9RrUx1Ty6k",
  authDomain: "pipegen-c69be.firebaseapp.com",
  projectId: "pipegen-c69be",
  storageBucket: "pipegen-c69be.appspot.com",
  messagingSenderId: "562811301771",
  appId: "1:562811301771:web:3f7d8246bfcac61c62498e",
  measurementId: "G-LB0P54H2X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);