// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBekZfalrY46WsZ1sElZCZFb4HBuQnxpc",
  authDomain: "vtuwebsite-3cb0f.firebaseapp.com",
  projectId: "vtuwebsite-3cb0f",
  storageBucket: "vtuwebsite-3cb0f.appspot.com",
  messagingSenderId: "420546865578",
  appId: "1:420546865578:web:9b036c2e96ce399d6ae3d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { db, auth };