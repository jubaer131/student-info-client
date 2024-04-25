// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkXLXFSIsJUgrViNTER5aUDyR9PC8agpY",
  authDomain: "student-info-b9908.firebaseapp.com",
  projectId: "student-info-b9908",
  storageBucket: "student-info-b9908.appspot.com",
  messagingSenderId: "968674072593",
  appId: "1:968674072593:web:e9a13eece1c2db1dfeb9b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);