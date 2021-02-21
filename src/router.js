import Login from "./Login";
import Dashboard from "./Dashboard";
import Userlist from "./userList";
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
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuth ? <Redirect to="/Dashboard" /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/login"
          render={({ location }) => (
            <Login location={location} setIsAuth={setIsAuth} />
          )}
        ></Route>
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          name="DASHBOARD!"
          setIsAuth={setIsAuth}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/userlist"
          component={Userlist}
          name="USERLIST!"
          setIsAuth={setIsAuth}
          isAuth={isAuth}
        />
      </Switch>
    </>
  );
}
