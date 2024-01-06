import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOr1j2reRdqsY-Xg5diK1xRr0uAtsP3Kc",
    authDomain: "notekeeper-b9f5b.firebaseapp.com",
    projectId: "notekeeper-b9f5b",
    storageBucket: "notekeeper-b9f5b.appspot.com",
    messagingSenderId: "76647297435",
    appId: "1:76647297435:web:53ded3a9bd555614e4f13e",
    measurementId: "G-9KMLTPTM0X"
};

const app=initializeApp(firebaseConfig); 
export const db = getFirestore(app);
 