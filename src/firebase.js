// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZdfZka5_v2uMnUOdtzgdewDVcZhfUIPE",
  authDomain: "mannka-darshan.firebaseapp.com",
  projectId: "mannka-darshan",
  storageBucket: "mannka-darshan.firebasestorage.app",
  messagingSenderId: "289772462097",
  appId: "1:289772462097:web:474a3db3deb745149a11b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);