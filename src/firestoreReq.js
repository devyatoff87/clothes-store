import { auth, db } from 'firebase/firebaseUtils';
import { getDocs, onSnapshot } from "firebase/firestore"
import { collection } from 'firebase/firestore';
import React, { useEffect } from 'react';

function FirestoreReq() {
    const makeReq = async () => {
        try {
            const doc = collection(db, "cars");
            const docSnapShot = await getDocs(doc);
            docSnapShot.forEach((req) => {
                let datObj = req.data();
                for (let val in datObj) {
                    console.log(val + ": " + datObj[val])
                }
                console.log(req.id)
                console.log("---")
            })

        } catch (err) {
            console.log(err)
        }
    }
    makeReq()

    return (
        <div>

        </div>
    )
}

export default FirestoreReq
