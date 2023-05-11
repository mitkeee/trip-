import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./styling.css";

export default function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy:user.displayName,
            userId:user.uid,
            likes:[],
            comments:[]
          })
          .then(() => {
            console.log("Article added successfully");
            setProgress(0);
          })
          .catch((err) => {
            console.log("Error adding article", err);
          });
          
        });
      }
    );
  };

  return (
    <div className="razmak">
    <div className="centerFrom">
      {!user ? (
        <>
          <h2>
            <Link to="/login">Login to create article</Link>
          </h2>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
      ) : (
        <>
          <h2>Create article</h2>
          
            <label>Title</label>
            <div>
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
          <label>Description</label>
          <textarea
            name="description"
            className="form"
            placeholder="Enter Description here"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />
          <div className="line"></div>
          {/* image */}
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className=""
            onChange={(e) => handleImageChange(e)}
          />
          {/*progress bar*/}
          {progress === 0 ? null : (
            <div>
              <div style={{ width: `${progress}%` }}>
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button
          className="button3"
            onClick={handlePublish}
          >Publish
          </button>
        </>
      )}
    </div>
    </div>
  );
}
