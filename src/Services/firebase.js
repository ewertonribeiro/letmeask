
import { initializeApp ,  } from "firebase/app";
import { getAuth , GoogleAuthProvider ,signInWithPopup } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBCkcAOvtziD58VN9hl6akf8aWlJoNsVWc",
  authDomain: "letmeask2-4fac7.firebaseapp.com",
  projectId: "letmeask2-4fac7",
  storageBucket: "letmeask2-4fac7.appspot.com",
  messagingSenderId: "520915963674",
  appId: "1:520915963674:web:ee87fc9442b11fc66126a3"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider();


export {db , auth , storage , provider, signInWithPopup }