// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0U4-Us9URQbjM28gQmvXuTQuR_pqxijY",
  authDomain: "realtime-database-e96b6.firebaseapp.com",
  databaseURL: "https://realtime-database-e96b6-default-rtdb.firebaseio.com",
  projectId: "realtime-database-e96b6",
  storageBucket: "realtime-database-e96b6.appspot.com",
  messagingSenderId: "852744755008",
  appId: "1:852744755008:web:28c700dcca1b5cefdb4ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db,app}