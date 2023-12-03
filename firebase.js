import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBa07npoutZf8UAq9YCjr39-pf4E_JY1yY",
  authDomain: "react-notes-20a38.firebaseapp.com",
  projectId: "react-notes-20a38",
  storageBucket: "react-notes-20a38.appspot.com",
  messagingSenderId: "858261319996",
  appId: "1:858261319996:web:8f53612f1645b48cd16e39",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");
