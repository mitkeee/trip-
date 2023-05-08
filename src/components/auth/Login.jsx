import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./../../firebaseConfig";
import { useNavigate } from "react-router-dom";
//import "./login.css";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Wrong email or password")
      }
    };
    
  return (
    <div className="login">
      <div className="form">
      <h1>Login</h1>
      <div className="formInput">
        <label> Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="  Enter your email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="line"></div>

      <div className="formInput">
        <label> Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="  Enter your password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      <div className="formInput">
        <div className="line"></div>
        <label>Don't have an account?</label> 
        <br></br>
        <a href="./register">Register here</a>
      </div>
        
      </div>
      
      <br />
      <button onClick={handleLogin}>
        Login
      </button>
      </div>
    </div>
  );
}
