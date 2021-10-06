import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config =  {
    apiKey: "AIzaSyBiDH4k4Rrs11jIeIwKD14L3cdVJ7-eC4o",
    authDomain: "crwn-db-78369.firebaseapp.com",
    projectId: "crwn-db-78369",
    storageBucket: "crwn-db-78369.appspot.com",
    messagingSenderId: "738185288224",
    appId: "1:738185288224:web:3e42c28524cdc3ad057a45",
    measurementId: "G-Q76SN9635V"
  };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
