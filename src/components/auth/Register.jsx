import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./login.css";


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
    <div className="login ">
      <div className="form">
      <h1>Register</h1>
      <div className="formInput">
        <label>Name:</label>
        <input
          type="text"
          className="lengg"
          placeholder="  Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="line"></div>
      <div className="formInput">
        <label>Email:</label>
        <input
          type="email"
          className="lengg"
          placeholder="  Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="line"></div>
      <div className="formInput">
        <label>Password:</label>
        <input
          type="password"
          className="lengg"
          placeholder="  Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="line"></div> 
        <p>Have an account?</p>
        <a href="./Login">Login here</a>
      <button className="button1" onClick={handleSignup}>
        Register
      </button>
    </div>
    </div>
  );
}
