// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "noah-s-blog.firebaseapp.com",
  projectId: "noah-s-blog",
  storageBucket: "noah-s-blog.appspot.com",
  messagingSenderId: "743267016108",
  appId: "1:743267016108:web:66d173ab26351a60cd2e09",
  measurementId: "G-YN9CB6GG89",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
