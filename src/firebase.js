import firebase from 'firebase/app';
import 'firebase/firestore';

// first userID: a3ofij11dfa

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBeVklX_Q7FexR0Q5ETmO1KCFseCOcGnNc",
  authDomain: "todoist-clone-6526c.firebaseapp.com",
  databaseURL: "https://todoist-clone-6526c.firebaseio.com",
  projectId: "todoist-clone-6526c",
  storageBucket: "todoist-clone-6526c.appspot.com",
  messagingSenderId: "438105569540",
  appId: "1:438105569540:web:24916fe30ea1cbe571b851"
});

export { firebaseConfig as firebase };