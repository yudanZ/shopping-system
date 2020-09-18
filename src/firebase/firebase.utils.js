import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-FsZL2AoB-ih1k9MjegSJWSkxbQkuEeo",
    authDomain: "shopping-system-82277.firebaseapp.com",
    databaseURL: "https://shopping-system-82277.firebaseio.com",
    projectId: "shopping-system-82277",
    storageBucket: "shopping-system-82277.appspot.com",
    messagingSenderId: "527150024050",
    appId: "1:527150024050:web:f83fd6c0faa2d33a9649eb",
    measurementId: "G-CC5WK8QX2S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'})

export function signInWithGoogle() {
    return auth.signInWithPopup(provider);
}

export default firebase;
