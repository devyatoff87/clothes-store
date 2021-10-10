import React, { useState } from "react";
import MenuItem from "../../molecules/menu-item/MenuItem_comp";
import "./menuItemList.scss";

const MenuItemlist = ({ items }) => {
  const [itemsState, setItemsState] = useState(() => items);
  return (
    <div className={"directory-menu"}>
      {itemsState.map((item) => {
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
