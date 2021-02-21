import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component,isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <Component  {...rest} /> : <Redirect to="/login" />
      }
    ></Route>
  );
}
