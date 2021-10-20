import React, { useState } from "react";
import "./SignIn_style.scss";
import FormInput from "components/atoms/form-input/FormInput_comp";
import Button from "components/atoms/button/Button_comp";
import { auth, signInWithGoogle } from "firebase/firebaseUtils";
import { signInWithEmailAndPassword } from "@firebase/auth";

const SignIn = () => {
  const initState = { email: "", password: "" };

  const [state, setState] = useState(initState);

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (email === "" && password === "") {
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setState(initState);
    } catch (err) {
      console.error(err);
    }
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className={"sign-in"}>
      <h2 className={"title"}>I've already an account</h2>
      <span className={"sub-title"}>Sign in with your email and password</span>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="email"
          name="email"
          required
          value={state.email}
          label={"E-mail"}
        />
        <FormInput
          onChangeCallback={(e) => onChangeHandle(e)}
          type="password"
          name="password"
          value={state.password}
          label={"Password"}
        />
        <Button onClickProps={(e) => onSubmitHandle(e)} type="submit">
          Submit
        </Button>
        <Button additionalStyle={"ml-2"} onClickProps={signInWithGoogle}>
          Sign in with google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
