import React from "react";
import "./shop-style.scss";
import CollectionPreview from "components/compound/collection/collection-preview/CollectionPreview_comp";
import { Route } from "react-router-dom";
import Collection_comp from "components/compound/collection/collection/Collection_comp";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionPreview} />
      <Route path={`${match.path}/:collectionId`} component={Collection_comp} />
    </div>
  );
};

export default Shop;
