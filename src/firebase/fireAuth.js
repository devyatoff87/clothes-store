import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { app } from "./fireInit";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    getFirestore

} from "firebase/firestore";

export const db = getFirestore(app)
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
