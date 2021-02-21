import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function LoginPage({ setIsAuth, location }) {
  const history = useHistory();

  function login() {
    console.log("Logging in!");
    setIsAuth(true);
    console.log(location);
    if (location.state) {
      history.push(location.state.from.pathname);
    } else {
      history.push("/dashboard");
    }
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={login}>Login</button>
      <br />
      <Link to="/dashboard">Enter Dashboard</Link>
      <br />
      <Link to="/userlist">Enter USERLIST</Link>
      <br />
      <Link to="/">Back to Root</Link>
    </div>
  );
}
