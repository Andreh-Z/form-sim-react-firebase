// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Variables
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectID = process.env.PROJECT_ID;
const Storage_bucket = process.env.STORAGE_BUCKET;
const messaging_sender_id = process.env.MESSAGING_SENDER_ID;
const app_id = process.env.APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectID,
  storageBucket: Storage_bucket,
  messagingSenderId: messaging_sender_id,
  appId: app_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
