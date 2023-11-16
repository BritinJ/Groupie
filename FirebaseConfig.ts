import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

//Web app's firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC7vfBb2ynuhG35SCxke5InlGwZoEzuJgg",
    authDomain: "awesomeproject-1c4d1.firebaseapp.com",
    projectId: "awesomeproject-1c4d1",
    storageBucket: "awesomeproject-1c4d1.appspot.com",
    messagingSenderId: "1038303274276",
    appId: "1:1038303274276:web:d2f4b2272dd44a4aa53fb1",
    measurementId: "G-2SNNMH7EB8"
  };

  //Initialize Firebase
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP)