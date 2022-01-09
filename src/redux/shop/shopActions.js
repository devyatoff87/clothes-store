import { db, collectionSnapshotToMap } from "firebase/fireData";
import { collection, getDocs } from "firebase/firestore";


import { SHOP_ACTIONS } from "./shopActionTypes"

export const fetchCollectionsStart = () => (
    { type: SHOP_ACTIONS.FETCH_COLLECTIONS_START }
)

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: SHOP_ACTIONS.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsError = (errorMsg) => ({
    type: SHOP_ACTIONS.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg
})

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collsRef = collection(db, "collections");
        dispatch(fetchCollectionsStart())

        getDocs(collsRef)
            .then((snapshot) => {
                const collectionsMap = collectionSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            })
            .catch(error => dispatch(fetchCollectionsError(error.message)))
    }
}