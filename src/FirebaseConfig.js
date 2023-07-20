import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAM5mITG-UL_RaAcrTEt40Jh9T3v8Q6ntE",
  authDomain: "ads-project-235ae.firebaseapp.com",
  projectId: "ads-project-235ae",
  storageBucket: "ads-project-235ae.appspot.com",
  messagingSenderId: "307903776850",
  appId: "1:307903776850:web:4a6b57cb2d6c490c27f78b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};