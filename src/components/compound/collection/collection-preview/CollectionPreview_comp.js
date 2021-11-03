import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "redux/shop/shopSelector";
import ColectionView from "../collection-view/CollectionView_comp";

const collectionPreview = ({ collections }) => {
  return (
    <div className={"container"}>
      <div>
        {collections.map(({ id, ...otherProps }) => {
          return <ColectionView key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps, null)(collectionPreview);
