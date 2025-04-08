import { Users } from "../../Data/User";
import { useState } from "react";
export default function RegUser() {
  function AddUser(e) {
    const { name, username } = e.target;
  }
  const [data, setData] = useState({ Users });
  const [newData, setNewData] = useState({});

  return (
    <>
      <div>
        <div>
          <h2>1 - Add your name *</h2>
          <p>We need your name so we can communicate with you</p>
          <input
            type="text"
            placeholder="add your name here"
            onChange={AddUser}
            name="name"
          ></input>
        </div>
        <div>
          <h2>2 - Pick a username*</h2>
          <p>we need a User name to associate with your account</p>
          <input
            type="text"
            placeholder="write your user name here"
            onChange={AddUser}
            name="username"
          ></input>
        </div>
        <div>
          <h2>3 - Add your e-mail</h2>
          <p>We need your mail so we can communicate effectively with you *</p>
          <input
            type="text"
            placeholder="Write your Password here"
            onChange={AddUser}
            name="password"
          ></input>
          <input type="" onChange={AddUser} name="maillist"></input>
        </div>
        <div>
          <h2>4 - Pick a password*</h2>
          <input
            type="text"
            placeholder="Write your Password here"
            onChange={AddUser}
            name="password"
          ></input>
        </div>
        <input></input>
      </div>
    </>
  );
}
