import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  isAuth,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    ></Route>
  );
}
