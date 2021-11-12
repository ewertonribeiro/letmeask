
import { initializeApp  } from "firebase/app";
import { getAuth , GoogleAuthProvider ,signInWithPopup } from 'firebase/auth'
import  { getDatabase , ref , child , get} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyBCkcAOvtziD58VN9hl6akf8aWlJoNsVWc",
  authDomain: "letmeask2-4fac7.firebaseapp.com",
  projectId: "letmeask2-4fac7",
  storageBucket: "letmeask2-4fac7.appspot.com",
  messagingSenderId: "520915963674",
  appId: "1:520915963674:web:ee87fc9442b11fc66126a3"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = new getDatabase(app)



export {db, auth , provider, signInWithPopup , ref , get ,child }