import React from "react";
import CollectionItem from "components/compound/collection/collection-item/ColectionItem_comp";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shopSelector";
import "./Collection_style.scss";

const Collection = ({ collection, match }) => {
  const { title, items } = collection;
  let pageTitle = match.params.collectionId;
  let fstLetter = pageTitle.charAt(0).toUpperCase();
  pageTitle = fstLetter + pageTitle.slice(1, pageTitle.length - 1);
  document.title = pageTitle;
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

const mapStateToProps = (state, ownProps) => {
  return {
    //second parameter are props of this component
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps, null)(Collection);
