import React from "react";
import "./menuItem.scss";
import { withRouter } from "react-router";

const MenuItem = ({ title, linkUrl, imageUrl, size, history, match }) => {
  const menuItemStyle = size ? `${size} menu-item` : "menu-item";
  const clickHandle = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div onClick={clickHandle} className={menuItemStyle}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={"background-image"}
      ></div>
      <div className={"content"}>
        <h1 className={"title"}>{title}</h1>
        <span className={"subtitle"}>Subtitle</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
