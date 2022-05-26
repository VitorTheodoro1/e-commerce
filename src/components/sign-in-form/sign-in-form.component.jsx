import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    console.log("aqui");
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    console.log("aqui2");
    event.preventDefault(); // nao permitir comportamento usual do form

    try {
      await signInAuthWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      // switch (error.code) {
      //   case "auth/wrong-password":
      //     alert("incorret password for email");
      //     break;
      //   case "auth/user-not-found":
      //     alert("no user associated with this email");
      //     break;
      //   default:
      //     console.log(error);
      // }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
