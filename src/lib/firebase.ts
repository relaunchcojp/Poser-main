//lib/firebase.ts
import  firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDr1mSS0bwstFpWoYzwmppXlidWe2n7JeU",
    authDomain: "poserappdev.firebaseapp.com",
    projectId: "poserappdev",
    storageBucket: "poserappdev.appspot.com",
    messagingSenderId: "99504722425",
    appId: "1:99504722425:web:4023b6116f44fac6532d28"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var uid: string;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
         uid =  user.uid; 
    } else {
      
    }
  });



export const getMessageDocRef = async () => {
   
    return firebase.firestore().collection('rooms').doc(uid).collection('messages').doc();
};




export const getChatListDocRef = async () => {
    return firebase.firestore().collection('rooms').doc(uid);
 };





export const getUserId = async () => {
    const userCredential = await firebase.auth().signInAnonymously();
    return userCredential.user?.uid;
};
