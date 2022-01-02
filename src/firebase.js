import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDbfMtuDXZE3tV_T_Tzhawey7a8IHY-TmY",
    authDomain: "napchat-108e6.firebaseapp.com",
    projectId: "napchat-108e6",
    storageBucket: "napchat-108e6.appspot.com",
    messagingSenderId: "250514082696",
    appId: "1:250514082696:web:a70ea96c22c9d9c0b6c83d"
  };

const firebase = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , storage , provider };
