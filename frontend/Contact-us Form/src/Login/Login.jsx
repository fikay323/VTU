import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const Navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    if (event.target.type === "email") {
      setUserDetails((prevState) => {
        return {
          ...prevState,
          email: event.target.value,
        };
      });
    } else {
      setUserDetails((prevState) => {
        return {
          ...prevState,
          password: event.target.value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then(() => {
        Navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="body">
      <div className="Login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={userDetails.email}
              onChange={handleInput}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={userDetails.password}
              onChange={handleInput}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
