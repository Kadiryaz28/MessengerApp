import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0z9bnqLPK4TmIqAn2XJm0Y_D6K-s5N-Q",
  authDomain: "messengerapp-e2bfe.firebaseapp.com",
  projectId: "messengerapp-e2bfe",
  storageBucket: "messengerapp-e2bfe.appspot.com",
  messagingSenderId: "395168130823",
  appId: "1:395168130823:web:3035dfde83e6216e3a07a2"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

