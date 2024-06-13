import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS_2GM7xgTpxIXDdioSqFVwhJx3b3OVcE",
  authDomain: "vue-firebase-407bf.firebaseapp.com",
  projectId: "vue-firebase-407bf",
  storageBucket: "vue-firebase-407bf.appspot.com",
  messagingSenderId: "822196807689",
  appId: "1:822196807689:web:47bd77b380227f3133f0d8",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
