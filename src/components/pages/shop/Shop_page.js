import React, { useEffect, useState } from "react";
import "./shop-style.scss";
import CollectionPreview from "components/compound/collection/collection-preview/CollectionPreview_comp";
import { Route, Routes, useLocation, useNavigate, useMatch, useParams } from "react-router-dom";
import Collection from "components/compound/collection/collection/CollectionItSelf_comp";
import Contact from "../contact/Contact_page";
import Button from "components/simple/button/Button_comp";
import CollectionItSelf_comp from "components/compound/collection/collection/CollectionItSelf_comp";

const Shop = () => {
  let params = useParams("linkUrl");
  let collectionId = Object.values(params)[0];

  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<CollectionPreview />} />
        <Route path={collectionId} element={<Collection />} />
      </Routes>
    </div>
  );
};

export default Shop;
