import React, { useEffect, useState } from "react";
import MenuItemlist from "components/compound/menu/menu-item-list/MenuItemList_comp";
import "./Home_style.scss";
import { fetchCollectionsStartAsync } from "redux/shop/shopActions";
import { connect } from "react-redux";
import WithSpinner from "components/HOCs/with-spinner/withSpinner"
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "redux/shop/shopSelector";




const Home = ({ fetchCollections, isLoading }) => {



  useEffect(() => {
    fetchCollections();
  }, [])

  const HomeWithSpinner = WithSpinner(MenuItemlist)

  return (
    <div className={"container page-content"}>
      <HomeWithSpinner isLoading={isLoading} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
