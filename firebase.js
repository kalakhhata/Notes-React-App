// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDslsfMsWDGz8Ks_MIZEjOj8MakOfgXBzw",
  authDomain: "react-notes-c0682.firebaseapp.com",
  projectId: "react-notes-c0682",
  storageBucket: "react-notes-c0682.appspot.com",
  messagingSenderId: "434169691649",
  appId: "1:434169691649:web:187fafc8121e4994c30a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")