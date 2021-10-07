import React from "react";
import MenuItemlist from "../../components/menuItem/MenuItemList_comp";
import items from "../../data/directory-data.json";
import "./homepage.styles.scss";

const Home = () => {
  return (
    <div className={"container-wide"}>
      <MenuItemlist items={items} />
    </div>
  );
};

export default Home;
