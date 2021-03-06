import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDoc, getUsers } from "firebase/fireAuth";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/userSelectors";
import Auth_UI from "./Auth_UI";

const AppAuth = ({ currentUser, setCurrentUser }) => {

  const [users, setUsers] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.navigator.onLine && setSuccess(true)
  }, [])

  useEffect(() => {
    success &&
      getUsers()
        .then((data) => {
          if (!data) {
            return;
          }
          setUsers((prev) => {
            return (prev = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            })));
          });
        })
        .catch(err => {
        })

    let unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      try {
        if (!userAuth && !auth) {
          const userRef = await createUserProfileDoc(userAuth);
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
          return;
        } else if (!userAuth && !auth) {
          console.log("no userAuth");
          return;
        }
        if (userAuth && auth) {
          setCurrentUser(userAuth);
        }
      } catch (err) {
      }
    });

    return () => {
      success && unsubscribe();
    };


  }, []);

  return (
    <>
      <Auth_UI currentUser={currentUser} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppAuth);
