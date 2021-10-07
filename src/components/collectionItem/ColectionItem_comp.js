import React from "react";
import "./ColectionItem_style.scss";

const ColectionItemComp = ({ id, name, price, imageUrl }) => {
  return (
    <div className={"collection-item"}>
      <div
        className={"image"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={"collection-footer"}>
        <div className={"name"}>{name}</div>
        <div className={"price"}>{price},00€</div>
      </div>
    </div>
  );
};

export default ColectionItemComp;
