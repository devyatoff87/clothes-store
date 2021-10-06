import React, { useState } from "react";
import "./shop-style.scss";
import shopData from "../../data/shop-data.json";
import PreviewCollection from "../../components/previewCollection/PreviewCollection_comp";
const Shop = () => {
  const [state, setState] = useState(() => shopData);

  return (
    <div>
      <h1>Shop</h1>
      <div>
        {shopData.map(({ id, ...otherProps }) => {
          return <PreviewCollection key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
