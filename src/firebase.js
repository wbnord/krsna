// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQpB5ZAepqL2xcgRTY7bHSVsx0viHdmo",
  authDomain: "krsna-b804c.firebaseapp.com",
  projectId: "krsna-b804c",
  storageBucket: "krsna-b804c.appspot.com",
  messagingSenderId: "293909381751",
  appId: "1:293909381751:web:8ff459917e4b8a6f98fc72"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db= getFirestore()

 