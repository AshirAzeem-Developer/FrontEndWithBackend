// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IvhS1bF7EsGw71T2UBDEd6Y5OFKvupM",
  authDomain: "fir-practice-ffe29.firebaseapp.com",
  databaseURL: "https://fir-practice-ffe29-default-rtdb.firebaseio.com",
  projectId: "fir-practice-ffe29",
  storageBucket: "fir-practice-ffe29.appspot.com",
  messagingSenderId: "743591535996",
  appId: "1:743591535996:web:4d3741739c8a0af1a7f0f9",
  measurementId: "G-9D6S6720RF"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );

export default app