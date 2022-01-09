import {
    collection,
    doc,
    writeBatch,
    getFirestore
} from "firebase/firestore";
import { app } from "./fireInit";


export const db = getFirestore(app)

export const addDataToFirestore = (key, objToAdd) => {
    const collectionRef = collection(db, key);
    //first fill batch with data to send data at once
    const batch = writeBatch(db);

    objToAdd.forEach((objVal) => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, objVal)
    })
    batch.commit()
}

export const collectionSnapshotToMap = (collections) => {

    const convertedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    const reducedCollection = convertedCollection.reduce((collectionsObject, collection) => {
        collectionsObject[collection.title.toLowerCase()] = collection;
        return collectionsObject
    }, {})

    return reducedCollection

    // let arr = [];

    // for (let el in obj) {
    //     arr.push(obj[el])
    // }


}