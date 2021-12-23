import React from "react";
import "./menuItem.scss";
import { useNavigate, } from "react-router";

const MenuItem = ({ item }) => {

  const navigate = useNavigate()

  const { title, size, linkUrl, imageUrl } = item;
  const menuItemStyle = size ? `${size} menu-item` : "menu-item";
  return (
    <div onClick={() => navigate(linkUrl)} className={menuItemStyle}>
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

export default MenuItem;
