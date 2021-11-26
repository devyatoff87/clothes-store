import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAoP_7TaElU_EsmIKDxqVatPVACdA63QQ8",
  authDomain: "clothes-store-b26e2.firebaseapp.com",
  projectId: "clothes-store-b26e2",
  storageBucket: "clothes-store-b26e2.appspot.com",
  messagingSenderId: "690348026200",
  appId: "1:690348026200:web:111eeab9b0240c369a5d2d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);


export const createUserProfileDoc = async (userAuth, payload) => {
  if (!userAuth) {
    return;
  }
  const userRef = doc(db, "users", userAuth.uid);
  const snapshot = await getDoc(userRef);
  console.log(snapshot)
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
      console.log("error!!!!!!!!!!!!!!!");
    }
  }

  return userRef;
};

export const getUsers = async () => {
  try {
    const userRef = collection(db, "users");
    let users = await getDocs(userRef);

    return users;

  } catch (error) {
    console.log("err-msg:")
    console.log(error)
  }
};

const provider = new GoogleAuthProvider();
if (provider && auth) {
  provider.setCustomParameters({ prompt: "select_account" });
}

export const signInWithGoogle = (auth) => {
  return signInWithRedirect(auth, provider);
};
