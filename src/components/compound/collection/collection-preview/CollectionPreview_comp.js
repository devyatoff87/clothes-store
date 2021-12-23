import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "redux/shop/shopSelector";
import ColectionGroup from "../collection-group/CollectionGroup_comp";
import { addDataToFirestore } from "firebase/fireInit";
import { convertObjToArr } from "utiles/utilFuncs";

const CollectionPreview = ({ collections }) => {

  const items = convertObjToArr(collections)
  return (
    <div className={"container"}>
      <div>
        {items.map(({ id, ...otherProps }) => {
          return <ColectionGroup key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps, null)(CollectionPreview);
