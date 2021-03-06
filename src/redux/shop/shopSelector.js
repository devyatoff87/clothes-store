import { createSelector } from "reselect";


const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => {
  return shop.collections
});

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections
      ? collections[collectionUrlParam]
      : null
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop =>
    shop.isFetching
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map((key) => { return collections[key] }) : []
);