import React from "react";
import "./menuItem.scss";

const MenuItem = ({ title, linkUrl, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={"background-image"}
      ></div>
      <div className={"content"}>
        <h1 className={"title"}>{title}</h1>
        <span className={"subtitle"}>Subtitle</span>
      </div>
    </div>
  );
};

export default MenuItem;
