import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB9AW-3OX7Asfsh2HQ4KW8A5FtyPXfMixw",
    authDomain: "comments-devreactjs-dai.firebaseapp.com",
    databaseURL: "https://comments-devreactjs-dai.firebaseio.com",
    projectId: "comments-devreactjs-dai",
    storageBucket: "comments-devreactjs-dai.appspot.com",
    messagingSenderId: "884083053670"
  };
  firebase.initializeApp(config);

  export const database = firebase.database()