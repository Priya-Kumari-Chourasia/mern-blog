// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-202ad.firebaseapp.com",
  projectId: "mern-blog-202ad",
  storageBucket: "mern-blog-202ad.appspot.com",
  messagingSenderId: "477550409891",
  appId: "1:477550409891:web:ffe5ecc5e5fb61636be716"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);