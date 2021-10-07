import React, { useState } from "react";
import "./shop-style.scss";
import shopData from "../../data/shop-data.json";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview_comp";
const Shop = () => {
  const [state, setState] = useState(() => shopData);

  return (
    <div className={"container"}>
      <h1>Shop</h1>
      <div>
        {shopData.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
