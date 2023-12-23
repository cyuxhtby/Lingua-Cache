import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdtMK9Esf_FZYb3IRWGVQ5qW0uvBf05ws",
    authDomain: "lingua-cache.firebaseapp.com",
    projectId: "lingua-cache",
    storageBucket: "lingua-cache.appspot.com",
    messagingSenderId: "380386872327",
    appId: "1:380386872327:web:b0efe5e379d26169c22ea2",
    measurementId: "G-E5RG9E94J9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc };
