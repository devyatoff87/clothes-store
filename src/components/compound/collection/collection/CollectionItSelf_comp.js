import React, { useState, useEffect } from "react";
import CollectionItem from "components/compound/collection/collection-item/ColectionItem_comp";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shopSelector";
import "./CollectionItSelf_style.scss";
import { useParams } from "react-router";
import { createPageTitle, convertObjToArr } from "utiles/utilFuncs";


const Collection = ({ collection }) => {

  const { title, items } = collection
  //  document.title = createPageTitle(collectionId)
  return (
    <div className="container">
      <div className={"d-flex flex-column mb-5"}>
        <h2 className={"title"}>{title}</h2>
        <div className={"d-flex justify-content-between flex-wrap"}>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { path }) => {
  return {
    //second parameter are props of this component
    // collection: selectCollection(ownProps.match.params.collectionId)(state),
    collection: selectCollection(path)(state)
  };
};

export default connect(mapStateToProps, null)(Collection);
