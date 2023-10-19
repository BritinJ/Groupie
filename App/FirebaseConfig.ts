import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

//Web app's firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCcqZCnTTabDB_iDg9KslTU2hI-tgNYoHA",
    authDomain: "groupieserver.firebaseapp.com",
    projectId: "groupieserver",
    storageBucket: "groupieserver.appspot.com",
    messagingSenderId: "662617185130",
    appId: "1:662617185130:web:455bc969036b48b189a313",
    measurementId: "G-E502Q1Z70B"
  };

  //Initialize Firebase
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP)