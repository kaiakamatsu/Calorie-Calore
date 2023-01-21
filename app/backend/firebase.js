// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7e-0YY8mi8SzJCmzTyY8rqWZTXkqEMkg",
  authDomain: "tracker-ba560.firebaseapp.com",
  projectId: "tracker-ba560",
  storageBucket: "tracker-ba560.appspot.com",
  messagingSenderId: "187527164277",
  appId: "1:187527164277:web:534e869f187e32fbeda33c",
  measurementId: "G-GHHJLMKL2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};