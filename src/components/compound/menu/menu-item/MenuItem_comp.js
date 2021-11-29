import React, { useState, useEffect } from "react";
import "./menuItem.scss";
import { withRouter } from "react-router";

const MenuItem = ({ item, history, match }) => {
  const clickHandle = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  const { title, size, linkUrl, imageUrl } = item;

  const menuItemStyle = size ? `${size} menu-item` : "menu-item";

  return (
    <div onClick={clickHandle} className={menuItemStyle}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={"background-image img_"}
      ></div>
      <div className={"content"}>
        <h1 className={"title"}>{title}</h1>
        <span className={"subtitle"}>Subtitle</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
