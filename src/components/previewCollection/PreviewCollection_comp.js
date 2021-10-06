import React from "react";
import "./previewCollection_style.scss";
const PreviewCollection = ({ title, items }) => {
  return (
    <div className={"collection-preview"}>
      <h2 className={"title"}>{title}</h2>
      <div className={"preview"}>
        {items
          .filter((_, index) => index < 5)
          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
