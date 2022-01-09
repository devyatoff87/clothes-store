import React, { useEffect } from "react";
import "./shop-style.scss";
import CollectionPreview from "components/compound/collection/collection-preview/CollectionPreview_comp";
import { Route, Routes, useParams } from "react-router-dom";
import Collection from "components/compound/collection/collection/CollectionItSelf_comp";
import { fetchCollectionsStartAsync } from "redux/shop/shopActions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "redux/shop/shopSelector";
import Spinner from "components/HOCs/with-spinner/withSpinner";


const Shop = ({ fetchCollections, isFetching }) => {

  let params = useParams("title");
  let collectionId = Object.values(params)[0];


  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<CollectionPreview />} />
        <Route path={collectionId} element={<Collection path={collectionId} />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
