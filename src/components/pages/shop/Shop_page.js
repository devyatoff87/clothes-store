import React, { useEffect, useState } from "react";
import "./shop-style.scss";
import CollectionPreview from "components/compound/collection/collection-preview/CollectionPreview_comp";
import { Route, Routes, useParams } from "react-router-dom";
import Collection from "components/compound/collection/collection/CollectionItSelf_comp";
import { db, collectionSnapshotToMap } from "firebase/fireData";
import { collection, getDocs } from "firebase/firestore";

import { updateCollections } from "redux/shop/shopActions";
import { connect } from "react-redux";

const Shop = ({ update }) => {

  let params = useParams("title");
  let collectionId = Object.values(params)[0];

  useEffect(() => {
    const collRef = collection(db, "collections");

    getDocs(collRef).then((snapshot) => {
      const collectionsMap = collectionSnapshotToMap(snapshot);
      update(collectionsMap)
    })
  })


  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<CollectionPreview />} />
        <Route path={collectionId} element={<Collection path={collectionId} />} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  update: payload => dispatch(updateCollections(payload))
})

export default connect(null, mapDispatchToProps)(Shop);
