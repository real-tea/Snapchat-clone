import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbfMtuDXZE3tV_T_Tzhawey7a8IHY-TmY",
    authDomain: "napchat-108e6.firebaseapp.com",
    projectId: "napchat-108e6",
    storageBucket: "napchat-108e6.appspot.com",
    messagingSenderId: "250514082696",
    appId: "1:250514082696:web:a70ea96c22c9d9c0b6c83d"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

const auth = getAuth();
const storage = getStorage(app)
// const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , storage   };
//provider not exported above