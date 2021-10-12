import React from "react";
import "./CollectionPreview_style.scss";
import CollectionItem from "components/molecules/collection-item/ColectionItem_comp";

const ColectionPreview = ({ title, items }) => {
  return (
    <div className={"collection-preview"}>
      <h2 className={"title"}>{title}</h2>
      <div className={"preview"}>
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherProps }) => {
            return <CollectionItem key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default ColectionPreview;
