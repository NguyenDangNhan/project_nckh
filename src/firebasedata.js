import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAxEWyJLtrGyWoO6Vv209ulm_qmDWKY7ME",
    authDomain: "datlinhphongkham.firebaseapp.com",
    databaseURL: "https://datlinhphongkham-default-rtdb.firebaseio.com",
    projectId: "datlinhphongkham",
    storageBucket: "datlinhphongkham.appspot.com",
    messagingSenderId: "848389795866",
    appId: "1:848389795866:web:df738877c44871ed5da1a3",
    measurementId: "G-W04T4WVF23"
  };
  // Initialize Firebase
  export const Firebasedata= firebase.initializeApp(firebaseConfig);

