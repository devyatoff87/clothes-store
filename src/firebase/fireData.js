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

    console.log(convertedCollection)

    const reducedCollection = convertedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc
    }, {})

    console.log(reducedCollection)


    return reducedCollection

    // let arr = [];

    // for (let el in obj) {
    //     arr.push(obj[el])
    // }


}