import { initializeApp } from "firebase/app";
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS_2GM7xgTpxIXDdioSqFVwhJx3b3OVcE",
  authDomain: "vue-firebase-407bf.firebaseapp.com",
  projectId: "vue-firebase-407bf",
  storageBucket: "vue-firebase-407bf.appspot.com",
  messagingSenderId: "822196807689",
  appId: "1:822196807689:web:575a8b091099656b33f0d8",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(app);

export { db };
