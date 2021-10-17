import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "app.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, createUserProfileDoc } from "firebase/firebaseUtils";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getUsers } from "firebase/firebaseUtils";
import Header from "components/organisms/header/Header_comp";
import Home from "components/pages/home/Home_page";
import Hats from "components/pages/hats/Hats_page";
import Shop from "components/pages/shop/Shop_page";
import Auth from "components/pages/auth/Auth_page";

function App() {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  //data.docs[0]._document.data.value.mapValue.fields

  useEffect(() => {
    getUsers().then((data) => {
      setUsers((prev) => {
        return (prev = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    });

    onAuthStateChanged(auth, async (userAuth) => {
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
  }, []);

  useEffect(() => {
    currentUser && console.log(currentUser);
  }, [currentUser]);

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
