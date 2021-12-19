import React from "react";
import CollectionItem from "components/compound/collection/collection-item/ColectionItem_comp";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shopSelector";
import "./CollectionItSelf_style.scss";
import { useParams } from "react-router";
import { createPageTitle } from "utiles/createPageTitle";

const Collection = ({ state }) => {

  let collectionId = useParams()
  collectionId = Object.values(collectionId)[0];
  const collection = selectCollection(collectionId)(state);
  const { title, items } = collection;

  document.title = createPageTitle(collectionId)

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
    // collection: selectCollection(ownProps.match.params.collectionId)(state),
    state: state
  };
};

export default connect(mapStateToProps, null)(Collection);
