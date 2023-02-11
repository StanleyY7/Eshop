// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGTQ80izR2u98XpUjIK9iAXQ5XypDjMNs",
  authDomain: "legion-cf141.firebaseapp.com",
  projectId: "legion-cf141",
  storageBucket: "legion-cf141.appspot.com",
  messagingSenderId: "487937370821",
  appId: "1:487937370821:web:a5ff5d6e7742cfd2181eac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
