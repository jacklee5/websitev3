// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWBIU6h3MuTovq38BdC2eS5nyfBm7JKMc",
  authDomain: "website-c2b4b.firebaseapp.com",
  projectId: "website-c2b4b",
  storageBucket: "website-c2b4b.appspot.com",
  messagingSenderId: "997247221305",
  appId: "1:997247221305:web:bc1a612f85cbee45c157e8",
  measurementId: "G-WVV2YHXP04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);