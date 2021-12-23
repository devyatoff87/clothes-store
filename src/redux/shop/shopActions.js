import { SHOP_ACTIONS } from "./shopActionTypes"

export const updateCollections = (collectionsMap) => ({
    type: SHOP_ACTIONS.UPDATE_COLLECTION, payload: collectionsMap
})