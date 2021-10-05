import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

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
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default MenuItemlist;
