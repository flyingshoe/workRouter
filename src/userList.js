import { Link, useHistory } from "react-router-dom";

export default function Userlist({setIsAuth,name}) {
  const history = useHistory();
  function logout(){
    console.log("Logging out!");
    setIsAuth(false);
    history.push('/login');
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={logout}>Logout</button>
      <br />
      <Link to="/dashboard">Enter Dashboard</Link>
      <br />
      <Link to="/">Back to Root</Link>
    </div>
  );
}
