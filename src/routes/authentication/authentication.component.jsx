//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

import //auth,
//signInWithGoogleRedirect,
"../../utils/firebase/firebase.utils";

const Authentication = () => {
  // useEffect(() => { // como faria com google redirect
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createuserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in google redirect
      </button> */}
    </div>
  );
};

export default Authentication;
