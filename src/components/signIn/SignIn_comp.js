import React, { useEffect, useState } from "react";
import "./SignIn_style.scss";
import FormInput from "../form/FormInput_comp";
import Button from "../button/Button_comp";

const SignIn = () => {
  const initState = { email: "", password: "" };

  const [state, setState] = useState(initState);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setState(initState);
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignIn;
