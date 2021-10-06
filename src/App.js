import React from "react";
import Home from "./pages/home/Home_page";
import Hats from "./pages/hats/Hats_page";
import Shop from "./pages/shop/Shop_page";
import { Route, Switch } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/hats" component={Hats} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
