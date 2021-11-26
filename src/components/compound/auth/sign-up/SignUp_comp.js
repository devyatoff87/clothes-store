import React, { useState } from "react";
import FormInput from "components/simple/form-input/FormInput_comp";
import Button from "components/simple/button/Button_comp";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, createUserProfileDoc } from "firebase/firebaseUtils";

const SignUp = () => {
  const init = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [state, stateState] = useState(init);

  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      createUserProfileDoc(user, { displayName });
      stateState(init);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    stateState({ ...state, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">No account yet?</h2>
      <span className="sub-title">Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="text"
          name="displayName"
          required
          value={displayName}
          label={"Name"}
        />
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="email"
          name="email"
          required
          value={email}
          label={"E-mail"}
        />
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="password"
          name="password"
          value={password}
          label={"Password"}
        />
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label={"Confirm password"}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
