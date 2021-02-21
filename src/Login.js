import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function LoginPage({ setIsAuth }) {
  const history = useHistory();

  function login() {
    console.log("Logging in!");
    setIsAuth(true);
    history.push("/dashboard");
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={login}>Login</button>
      {/* <Link to="/dashboard" onClick={login}>Login</Link> */}
      <br />
      <Link to="/dashboard">Enter Dashboard</Link>
      <br />
      <Link to="/">Back to Root</Link>
    </div>
  );
}
