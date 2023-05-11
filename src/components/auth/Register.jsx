import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./auth.css";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      console.error(error.code);
    }
  };
  
  return (
    <div className="Center ">
      <div className="form">
      <h1>Register</h1>
      <div >
        <label>Name:</label>
        <input
          type="text"
          className="boxx"
          placeholder="  Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="line"></div>
      <div >
        <label>Email:</label>
        <input
          type="email"
          className="boxx"
          placeholder="  Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="line"></div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          className="boxx"
          placeholder="  Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="line"></div> 
        <p>Have an account?</p>
        <a className="darkteks" href="./Login">Login here</a>
      <button className="button1" onClick={handleSignup}>
        Register
      </button>
    </div>
    </div>
  );
}
