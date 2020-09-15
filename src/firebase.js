import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDM-6riupGxoTcDFOte6rzJ42UeL7oNs80",
    authDomain: "clone-d643d.firebaseapp.com",
    databaseURL: "https://clone-d643d.firebaseio.com",
    projectId: "clone-d643d",
    storageBucket: "clone-d643d.appspot.com",
    messagingSenderId: "610098790729",
    appId: "1:610098790729:web:9cf9a45ee4511fb9f25a98",
    measurementId: "G-VFNT8MNBDB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};