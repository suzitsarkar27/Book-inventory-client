// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMtYujEH2mEStQUPcsmrU3dQWRKows3So",
  authDomain: "book-inventory-clientside.firebaseapp.com",
  projectId: "book-inventory-clientside",
  storageBucket: "book-inventory-clientside.appspot.com",
  messagingSenderId: "318729032955",
  appId: "1:318729032955:web:bbd7a69cbcf4e1d7c24c5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
