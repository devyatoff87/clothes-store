import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "app.scss";

import Header from "components/organisms/header/Header_comp";
import Home from "components/pages/home/Home_page";
import Hats from "components/pages/hats/Hats_page";
import Shop from "components/pages/shop/Shop_page";
import Auth from "components/pages/auth/Auth_page";

import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDoc } from "firebase/firebaseUtils";
import { onSnapshot } from "firebase/firestore";
import { getUsers } from "firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/userActions";

const App = ({ setCurrentUser, currentUser }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers((prev) => {
        return (prev = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })));
      });
    });

    let unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
        return;
      }
      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/hats" component={Hats} />
        <Route component={Home} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser };
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
