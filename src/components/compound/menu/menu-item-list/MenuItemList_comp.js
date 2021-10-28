import React from "react";
import MenuItem from "components/compound/menu/menu-item/MenuItem_comp";
import "./menuItemList.scss";

const MenuItemlist = ({ items }) => {
  return (
    <div className={"directory-menu"}>
      {items.map((item) => {
        return (
          <MenuItem
            title={item.title}
            imageUrl={item.imageUrl}
            id={item.id}
            linkUrl={item.linkUrl}
            size={item.size}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default MenuItemlist;
