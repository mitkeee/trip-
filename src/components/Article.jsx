import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import Comment from './Comment';
import "./addacc.css";

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
    <div className="">
      {article && (
        <div>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="imag"
                  />
        <div className="position">
          <h2>{article.title}</h2>
          <div> Posted by: {article.createdBy}</div>
          <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
          <h5>Description:</h5>
          <h5>{article.description}</h5>  
        </div>
          <div className="formm">
            <Comment id={article.id} />
          </div>
        </div>
      )}
    </div>
  );
}
