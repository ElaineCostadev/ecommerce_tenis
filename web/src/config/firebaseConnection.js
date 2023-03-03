import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDOnT52rOtJu1XYg4r0-ZFqQ9IrRlk4ytM",
  authDomain: "cognydatabase.firebaseapp.com",
  projectId: "cognydatabase",
  storageBucket: "cognydatabase.appspot.com",
  messagingSenderId: "675493603078",
  appId: "1:675493603078:web:0fe767743b7efea6852087",
  measurementId: "G-VSM8VFD9V3"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);