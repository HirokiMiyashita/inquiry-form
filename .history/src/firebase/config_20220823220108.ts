// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKVa7mtQxbQkQOnbW632u9yoE5XlSwPU",
  authDomain: "inquiry-form-ef78b.firebaseapp.com",
  projectId: "inquiry-form-ef78b",
  storageBucket: "inquiry-form-ef78b.appspot.com",
  messagingSenderId: "185465414416",
  appId: "1:185465414416:web:8d2e50346ef8e22376fb95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const realTimeDb = getDatabase();
