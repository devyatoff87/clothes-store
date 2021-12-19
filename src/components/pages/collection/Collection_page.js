import React from "react";
import CollectionComp from "components/compound/collection/collection/CollectionItSelf_comp";

const Collection_page = () => {
  document.title = "Collection";

  return (
    <div className="container page-content">
      <CollectionComp />
    </div>
  );
};

export default Collection_page;
