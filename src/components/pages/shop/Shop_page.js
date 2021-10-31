import React, { useState } from "react";
import "./shop-style.scss";
import CollectionPreview from "components/compound/collection/collection-preview/CollectionPreview_comp";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "redux/shop/shopSelector";

const Shop = ({ items }) => {
  return (
    <div className={"container"}>
      <div>
        {items.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
});

export default connect(mapStateToProps, null)(Shop);
