import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9kqmMlCYHK17JIYePNXyRsHsXDMQFL8U",
    authDomain: "facebook-clone-d445a.firebaseapp.com",
    projectId: "facebook-clone-d445a",
    storageBucket: "facebook-clone-d445a.appspot.com",
    messagingSenderId: "611783556981",
    appId: "1:611783556981:web:b9202847232431dce75d3c",
    measurementId: "G-CHT3CXRCPJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;