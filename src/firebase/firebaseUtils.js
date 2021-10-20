import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAoP_7TaElU_EsmIKDxqVatPVACdA63QQ8",
  authDomain: "clothes-store-b26e2.firebaseapp.com",
  projectId: "clothes-store-b26e2",
  storageBucket: "clothes-store-b26e2.appspot.com",
  messagingSenderId: "690348026200",
  appId: "1:690348026200:web:111eeab9b0240c369a5d2d",
};

let app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const createUserProfileDoc = async (userAuth, payload) => {
  if (!userAuth) {
    return;
  }
  const userRef = doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...payload,
      });
    } catch {
      console.log("error");
    }
  }
  return userRef;
};

export const getUsers = async () => {
  const userRef = collection(db, "users");
  let users = await getDocs(userRef);
  return users;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithRedirect(auth, provider);
