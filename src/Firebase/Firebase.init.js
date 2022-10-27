// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8GSS4KNnWeCQJbtkDhgaSLID1qK6fgF4",
  authDomain: "develop-course.firebaseapp.com",
  projectId: "develop-course",
  storageBucket: "develop-course.appspot.com",
  messagingSenderId: "956163192618",
  appId: "1:956163192618:web:8006002cb5afd047b05053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;