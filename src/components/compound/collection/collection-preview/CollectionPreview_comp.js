import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "redux/shop/shopSelector";
import { selectCollectionsForPreview } from "redux/shop/shopSelector";
import ColectionGroup from "../collection-group/CollectionGroup_comp";
import { convertObjToArr } from "utiles/utilFuncs";

const CollectionPreview = ({ collections }) => {

  return (
    <div className={"container"}>
      <div>
        {collections.map(({ id, ...otherProps }) => {
          return <ColectionGroup key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // collections: selectCollections,
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionPreview);
