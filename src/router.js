import Login from "./Login";
import Dashboard from "./Dashboard";
import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

export default function Routing() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log("checking if user is authenticated");
    //If user is authenticated,set isAuth to true, else false
    setIsAuth(0 ? true : false);
  }, []);

  return (
    <Switch>
      {/* <Redirect exact from="/" to="/login" /> */}
      <Route
        exact
        path="/"
        render={() =>
          isAuth ? <Redirect to="/Dashboard" /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/login"
        render={() => <Login setIsAuth={setIsAuth} />}
      ></Route>
      {/* <Route
        path="/dashboard"
        render={() => <Dashboard name="DASH PROPS!" setIsAuth={setIsAuth} />}
      ></Route> */}
      <ProtectedRoute
        path="/dashboard"
        component={Dashboard}
        name="DASH PROPS!"
        setIsAuth={setIsAuth}
        isAuth = {isAuth}
      />
    </Switch>
  );
}
