import React from "react";
import "./CollectionGroup_style.scss";
import CollectionItem from "components/compound/collection/collection-item/ColectionItem_comp";

const ColectionGroup = ({ title, items }) => {
  return (
    <div className={"d-flex flex-column mb-5"}>
      <h2 className={"title"}>{title}</h2>
      <div className={"d-flex justify-content-between flex-wrap"}>
        {items
          .filter((_, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ColectionGroup;
