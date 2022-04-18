// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvC4nfa6IiT7SEhiGZHMKKdNL6xiMKro",
  authDomain: "bd-wedding-photographer.firebaseapp.com",
  projectId: "bd-wedding-photographer",
  storageBucket: "bd-wedding-photographer.appspot.com",
  messagingSenderId: "43840114597",
  appId: "1:43840114597:web:1ee6690438d70d3126a24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;