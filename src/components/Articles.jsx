import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import Delete from "./Delete";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./styling.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div className="">
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
          }) => (
            <div className="bakgroundfrom" key={id}>
                <div>
                  <Link to={`/article/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 240 }}
                    />
                  </Link>
                      {createdBy && (
                        <span className="creator">Created by:{createdBy}</span>
                      )}
                    {user && user.uid === userId && (
                        <button className="button3">
                        <Delete id={id} imageUrl={imageUrl}/>
                        </button>
                      )}
                    <div className="creator">
              <Link to={`/article/${id}`}>
                  <span className="text">{title}</span>
              </Link>  
                  </div>
                  <p>{createdAt.toDate().toDateString()}</p>
                </div>
              </div>
          )
        )
      )}
    </div>
  );
}
