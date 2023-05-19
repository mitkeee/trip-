import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import Comment from './Comment';
import "./style.css";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  
  return (
    <div>
      {article && (
        <div>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="imag"
          />
          <div className="positioning">
            <h2>{article.title}</h2>
            <div> Posted by: {article.createdBy}</div>
            <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <h5>Description:</h5>
            <h5>{article.description}</h5>  
          </div>
          {user ? (
            <div className="positioning2">
              <Comment id={article.id} />
            </div>
          ) : (
            <>
              <h2>
                <Link to="/login">Login to create article</Link>
              </h2>
              Don't have an account? <Link to="/register">Signup</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}