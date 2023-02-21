import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4Ou5qY4pYSJkXDH5rTP2GPUJvnsOpIC8",
  authDomain: "disney-clone-7fdf5.firebaseapp.com",
  projectId: "disney-clone-7fdf5",
  storageBucket: "disney-clone-7fdf5.appspot.com",
  messagingSenderId: "193557009506",
  appId: "1:193557009506:web:4dece6cd71ac20795ded3b",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
