// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjLzizMl2jy8vT_yaESWthpdhSOkaXfY",
  authDomain: "greydive-test.firebaseapp.com",
  projectId: "greydive-test",
  storageBucket: "greydive-test.appspot.com",
  messagingSenderId: "333108600801",
  appId: "1:333108600801:web:7558c5b6675c73762dbca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
