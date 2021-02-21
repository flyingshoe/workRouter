import { Link, useHistory } from "react-router-dom";

export default function Dashboard({setIsAuth,name}) {
  const history = useHistory();
  function logout(){
    console.log("Logging out!");
    setIsAuth(false);
    history.push('/login');
  }
  return (
    <div>
      <h1>{name}</h1>
      {/* <Link to="./login">Logout</Link> */}
      <button onClick={logout}>Logout</button>
      <br />
      <Link to="/">Back to Root</Link>
    </div>
  );
}
