import React from "react";
import MenuItemlist from "components/compound/menu/menu-item-list/MenuItemList_comp";
import items from "data/directory-data.json";
import "./Home_style.scss";

const Home = () => {
  return (
    <div className={"container"}>
      <MenuItemlist items={items} />
    </div>
  );
};

export default Home;
