import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDraL0-3LreMjC57WWSCIhlu5SRmPgkesw",
  authDomain: "project-test-c3fe4.firebaseapp.com",
  databaseURL: "https://project-test-c3fe4-default-rtdb.firebaseio.com",
  projectId: "project-test-c3fe4",
  storageBucket: "project-test-c3fe4.appspot.com",
  messagingSenderId: "533865448977",
  appId: "1:533865448977:web:3114dfa9810d53322fd3b0",
  measurementId: "G-MGNBQL19SG"
};
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);