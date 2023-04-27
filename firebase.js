// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5u958BElpfWya8npNZl61SDBYeAE5Lc",
  authDomain: "whatsapp-clone-75fe9.firebaseapp.com",
  projectId: "whatsapp-clone-75fe9",
  storageBucket: "whatsapp-clone-75fe9.appspot.com",
  messagingSenderId: "808770619061",
  appId: "1:808770619061:web:a14b439042b382f9eae0fc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export {app, db, auth}