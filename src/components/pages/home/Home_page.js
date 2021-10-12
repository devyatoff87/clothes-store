import React from "react";
import MenuItemlist from "components/organisms/menu-item-list/MenuItemList_comp";
import items from "data/directory-data.json";
import "./Home_style.scss";

const Home = () => {
  return (
    <div className={"container-wide"}>
      <MenuItemlist items={items} />
    </div>
  );
};

export default Home;
