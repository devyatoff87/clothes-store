import React from "react";
import MenuItemlist from "../../components/menuItem/MenuItemList";
import items from "../../data/directory-data.json";
import "./homepage.styles.scss";

const Home = () => {
  return (
    <div className={"home"}>
      <MenuItemlist items={items} />
    </div>
  );
};

export default Home;
