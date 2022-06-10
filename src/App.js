import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import {
  onAuthStateChangedListener,
  createuserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createuserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route path="checkout" element={<CheckOut></CheckOut>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
