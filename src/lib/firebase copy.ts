//lib/firebase.ts
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqHSpSCFodLJ1TCc6K8gKXQkpRgqs0FvA",
    authDomain: "chatexpo-24aa7.firebaseapp.com",
    projectId: "chatexpo-24aa7",
    storageBucket: "chatexpo-24aa7.appspot.com",
    messagingSenderId: "927638438614",
    appId: "1:927638438614:web:b2631d35b94fb074c0ff77"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;




export const getMessageDocRef = async () => {
   const userCredential = await user; 
    return firebase.firestore().collection('rooms').doc(userCredential.uid).collection('messages').doc();
};


export const getUserId = async () => {
    const userCredential = await firebase.auth().signInAnonymously();
    return userCredential.user?.uid;
};
