import { Link } from "react-router-dom";
import { ErrorAdmin } from "../../Function/ErrorMas";
export default function LoginAdmin() {
  return (
    <>
      <h2>enter Username and Passwrod</h2>
      <p>Login text</p>
      <input type="text"></input>
      <input type="text"></input>
      <button onSubmit={ErrorAdmin}>Login</button>
      <p>
        are you a user? try Login in <Link to="/Login/"> here</Link>
      </p>
    </>
  );
}
