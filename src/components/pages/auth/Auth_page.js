import React, { useState, useEffect } from "react";
import SignIn from "components/organisms/sign-in/SignIn_comp";
import SignUp from "components/organisms/sign-up/SignUp_comp";

import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDoc } from "firebase/firebaseUtils";
import { onSnapshot } from "firebase/firestore";
import { getUsers } from "firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/userActions";
import { useDispatch } from "react-redux";

const Auth = ({ setCurrentUser }) => {
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();

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
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
        return;
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   currentUser && console.log("currentUser: ", currentUser);
  //   users && console.log("users: ", users);
  // }, [users, currentUser]);

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col col-6"}>
          <SignIn />
        </div>
        <div className={"col col-6"}>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({
  setCurrentUser: (user) => setCurrentUser(user),
});

export default connect(mapStateToProps)(Auth);
