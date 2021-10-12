import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoP_7TaElU_EsmIKDxqVatPVACdA63QQ8",
  authDomain: "clothes-store-b26e2.firebaseapp.com",
  projectId: "clothes-store-b26e2",
  storageBucket: "clothes-store-b26e2.appspot.com",
  messagingSenderId: "690348026200",
  appId: "1:690348026200:web:111eeab9b0240c369a5d2d",
};

let firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const store = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export default firebase;
