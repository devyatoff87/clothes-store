import React from "react";
import MenuItemlist from "components/compound/menu/menu-item-list/MenuItemList_comp";
import "./Home_style.scss";

const Home = () => {
  document.title = "Home";
  return (
    <div className={"container"}>
      <MenuItemlist />
    </div>
  );
};

export default Home;
