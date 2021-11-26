import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import Header from "components/compound/header/Header_comp";
import Home from "components/pages/home/Home_page";
import Shop from "components/pages/shop/Shop_page";
import Auth from "components/pages/auth/Auth_page";
import Checkout from "components/pages/checkout/Checkout_page";
import Footer from "components/compound/footer/Footer_comp";

const App = ({ currentUser }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
