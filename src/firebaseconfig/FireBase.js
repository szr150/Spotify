
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjPKd8qOmaYJ9ySK1OhhnSlM_xQMWkNuA",
  authDomain: "spotify-42e96.firebaseapp.com",
  projectId: "spotify-42e96",
  storageBucket: "spotify-42e96.firebasestorage.app",
  messagingSenderId: "366954472882",
  appId: "1:366954472882:web:8fa8c62e0ed791559ab0ab",
  measurementId: "G-R7DZC5ERBN"
};


const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;