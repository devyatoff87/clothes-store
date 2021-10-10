import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";

import Header from "./components/organisms/header/Header_comp";

import Home from "./components/pages/home/Home_page";
import Hats from "./components/pages/hats/Hats_page";
import Shop from "./components/pages/shop/Shop_page";
import Auth from "./components/pages/auth/Auth_page";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/hats" component={Hats} />
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;
