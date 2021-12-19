import React, { useState, useEffect } from "react";
import "./menuItem.scss";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const location = useLocation();

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
