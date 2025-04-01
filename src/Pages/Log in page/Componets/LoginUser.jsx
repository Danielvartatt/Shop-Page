import { Link } from "react-router-dom";
export default function LoginUser() {
  return (
    <>
      <h2>enter Username and Passwrod</h2>
      <p>Login text</p>
      <input type="text"></input>
      <input type="text"></input>
      <Link to="/">
        <button>Login</button>
      </Link>
      <p>
        are you a seller? try Login in <Link to="/Login-Special/"> here</Link>
      </p>
    </>
  );
}
