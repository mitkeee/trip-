import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./auth.css";

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
    <div className="Center">
      <div className="form">
      <h1>Login</h1>
      <div >
        <label> Email</label>
        <input
          type="email"
          className="boxx"
          placeholder="  Enter your email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="line"></div>

      <div >
        <label> Password</label>
        <input
          type="password"
          className="boxx"
          placeholder="  Enter your password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      <div >
        <div className="line"></div>
        <label>Don't have an account?</label> 
        <br></br>
        <Link to="/register" className="darkteks">Register here</Link>
      </div>
      </div>
      <button className="button1" onClick={handleLogin}>
        Login
      </button>
      </div>
    </div>
  );
}
