import * as firebase from 'firebase';

require('@firebase/firestore');

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQp040ZwXmLxiFOG7RH3I7iZzm9xwYByc",
    authDomain: "bedtime-stories-samyak.firebaseapp.com",
    databaseURL: "https://bedtime-stories-samyak.firebaseio.com",
    projectId: "bedtime-stories-samyak",
    storageBucket: "bedtime-stories-samyak.appspot.com",
    messagingSenderId: "1016481327389",
    appId: "1:1016481327389:web:cb7976a3f9304b341b99f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();