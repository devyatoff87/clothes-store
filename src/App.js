import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "app.scss";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase/firebaseUtils";

import Header from "components/organisms/header/Header_comp";
import Home from "components/pages/home/Home_page";
import Hats from "components/pages/hats/Hats_page";
import Shop from "components/pages/shop/Shop_page";
import Auth from "components/pages/auth/Auth_page";

function App() {
  const [userState, setUserState] = useState(() => null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserState((prev) => (prev = user));
      console.log(unsubscribe);
    });
    return () => {
      unsubscribe();
    };
  });

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
