import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "redux/shop/shopSelector";
import ColectionGroup from "../collection-group/CollectionGroup_comp";
import { addDataToFirestore } from "firebase/firebaseUtils";

const CollectionPreview = ({ collections }) => {
  useEffect(() => {

    // addDataToFirestore("collections", collections.map(({ title, items }) => ({ title, items })))

  })
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
  collections: selectCollections,
});

export default connect(mapStateToProps, null)(CollectionPreview);
