import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import "./addacc.css";

export default function Contact() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    description: "",
    subject: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (!formData.name || !formData.surname || !formData.email || !formData.title || !formData.description ) {
      alert("Please fill all the fields");
      return;
    }

    const articleRef = collection(db, "Contac");
    addDoc(articleRef, {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        title: formData.title,
        description: formData.description,
        createdBy: user.displayName,
        userId: user.uid,
    })
    .then(() => {
        console.log("Article added successfully");
        alert("Article added successfully");
    })
    .catch((err) => {
        console.log("Error adding article", err);
    });
}
    
    

  

  return (
    <div className="razmak">
    <div className="artic">
        <>
          <h2>Contact us</h2>
          
            <label >Name</label>
            <div className="">
            <input
              type="text"
              name="name"
              className="lengg"
              placeholder="Enter Name here"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
           </div>
          <div className="line"></div>
          <label >Surname</label>
            <div className="">
            <input
              type="text"
              name="surname"
              className="lengg"
              placeholder="Enter surname here"
              value={formData.surname}
              onChange={(e) => handleChange(e)}
            />
           </div>
           <div className="line"></div>
          <label >Email</label>
            <div className="">
            <input
              type="text"
              name="email"
              className="lengg"
              placeholder="Enter email here"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
           </div>
          <div className="line"></div>
          <label >Title</label>
            <div className="">
            <input
              type="text"
              name="title"
              className="lengg"
              placeholder="Enter Title here"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
           </div>
          <div className="line"></div>

          {/* description */}
          <label >Description</label>
          <textarea
            name="description"
            className="form"
            placeholder="Enter Description here"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

          <button
            className=""
            onClick={handlePublish}
          >
            Publish
          </button>
        </>
    </div>
    </div>
  );
  }
