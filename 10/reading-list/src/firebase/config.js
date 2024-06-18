import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS_2GM7xgTpxIXDdioSqFVwhJx3b3OVcE",
  authDomain: "vue-firebase-407bf.firebaseapp.com",
  projectId: "vue-firebase-407bf",
  storageBucket: "vue-firebase-407bf.appspot.com",
  messagingSenderId: "822196807689",
  appId: "1:822196807689:web:680e45da8486667a33f0d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
