//types/message.ts

import firebase from 'firebase';

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

export type Message = {
    text: string;
    createdAt: firebase.firestore.Timestamp;
    userId: string;
    
};
