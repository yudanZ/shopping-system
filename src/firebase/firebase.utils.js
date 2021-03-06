import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

//set the configuration for my app
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

// get user infor from google authentication
export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if( !userAuth ) return;
    //console.log(userAuth.uid)
    //get user reference info from firestore in collection "users" with uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if( !snapShot.exists){
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            // add a new user into our firestore database
            await userRef.set({
                displayName,
                email, 
                createdDate,
                ...additionalData
            })

        }catch(error){
            console.log("Error writing document:", error);
        }
    }
    //console.log(userRef);
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title, 
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'})

export function signInWithGoogle() {
    //console.log('signin with google');
    return auth.signInWithPopup(provider);
}

export default firebase;
