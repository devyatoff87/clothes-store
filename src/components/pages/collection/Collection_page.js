import React from "react";
import CollectionComp from "components/compound/collection/collection/Collection_comp";

const Collection_page = () => {
  document.title = "Collection";
  return (
    <div className="container">
      <CollectionComp />
    </div>
  );
};

export default Collection_page;
