import React, { useState, useEffect } from "react";
import MenuItem from "components/compound/menu/menu-item/MenuItem_comp";
import "./menuItemList.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "redux/directory/directorySelector";
const MenuItemlist = ({ items }) => {

  return (
    <div className={"directory-menu"}>
      {items.map((item) => {
        return (
          <MenuItem
            item={item}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectDirectorySections,
});

export default connect(mapStateToProps, null)(MenuItemlist);
