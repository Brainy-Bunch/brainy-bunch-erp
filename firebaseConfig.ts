// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR5B6HEKmTudxdeoWXBvmMu5wWqqFIExE",
  authDomain: "brainy-bunch-fd39d.firebaseapp.com",
  projectId: "brainy-bunch-fd39d",
  storageBucket: "brainy-bunch-fd39d.appspot.com",
  messagingSenderId: "422836915241",
  appId: "1:422836915241:web:3281e7cae1dff91d3f2038",
  measurementId: "G-WQ1TMW411N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app