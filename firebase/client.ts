import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJO0u5rykNAPbs4wa5onPYeDX3CRyWeLo",
  authDomain: "interwise-d1da2.firebaseapp.com",
  projectId: "interwise-d1da2",
  storageBucket: "interwise-d1da2.firebasestorage.app",
  messagingSenderId: "382653608306",
  appId: "1:382653608306:web:0bc69a51fa633812096deb",
  measurementId: "G-0ZKF009GGJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
