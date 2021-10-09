import React, { useState } from "react";
import "./shop-style.scss";
import shopData_ from "../../data/shop-data.json";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview_comp";

const Shop = () => {
  const [shopData, sethShopData] = useState(() => shopData_);

  return (
    <div className={"container"}>
      <div>
        {shopData.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
