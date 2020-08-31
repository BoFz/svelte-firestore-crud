import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAeirDMKijK5HHI5z0bGs1DO7idMoyniMY",
    authDomain: "svelte-crud-225af.firebaseapp.com",
    databaseURL: "https://svelte-crud-225af.firebaseio.com",
    projectId: "svelte-crud-225af",
    storageBucket: "svelte-crud-225af.appspot.com",
    messagingSenderId: "900601465600",
    appId: "1:900601465600:web:aebac23c2847cfabe2c1e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()