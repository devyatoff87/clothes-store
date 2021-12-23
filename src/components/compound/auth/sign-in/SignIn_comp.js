import React, { useState, useEffect } from "react";
import "./SignIn_style.scss";
import FormInput from "components/simple/form-input/FormInput_comp";
import Button from "components/simple/button/Button_comp";
import { auth, signInWithGoogle } from "firebase/fireAuth";
import { signInWithEmailAndPassword } from "@firebase/auth";

const SignIn = () => {

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.navigator.onLine && setSuccess(true)
  }, [])

  const initVal = { email: "", password: "" };
  const [state, setState] = useState(initVal);

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (email === "" && password === "" || !success) {
      return;
    }
    console.log("rerender")
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setState(initVal);
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
      <h2 className={"title"}>Allready signed up?</h2>
      <span className={"sub-title"}>Sign in with email and password</span>
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
        <div className="d-flex flex-column">
          <Button onClickProps={(e) => onSubmitHandle(e)} type="submit">
            Submit
          </Button>
          <Button
            additionalStyles={"custom-button mt-2"}
            onClickProps={() => success && signInWithGoogle(auth)}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
