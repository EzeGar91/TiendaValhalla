import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcUvnXGhxyhLhsGdv1GhXkvj8pCngre84",
  authDomain: "valhalla-b4aec.firebaseapp.com",
  projectId: "valhalla-b4aec",
  storageBucket: "valhalla-b4aec.appspot.com",
  messagingSenderId: "976113379100",
  appId: "1:976113379100:web:24740469c581fe24c6bcd9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);