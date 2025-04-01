import { Link } from "react-router-dom";
export default function LoginAdmin() {
  return (
    <>
      <h2>enter Username and Passwrod</h2>
      <p>Login text</p>
      <input type="text"></input>
      <input type="text"></input>
      <Link to="/Seller/:sellerid">
        <button>Log in</button>
      </Link>
      <p>
        are you a user? try Login in <Link to="/Login/"> here</Link>
      </p>
    </>
  );
}
