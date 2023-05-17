import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import Delete from "./Delete";
import LikeArticle from "./Like";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./style.css";

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
            comments,
            imageUrl,
            createdAt,
            createdBy,
            likes,
            userId,
          }) => (
            <div className="bakgroundfrom" key={id}>
              <div className="like">
                {/*number of comments and likes*/}
              {comments && comments.length >= 0 && (
                      <div>
                        <p>{comments?.length} comments</p>
                      </div>
                    )}
                    <div className="">
                      <p>{likes?.length} likes</p>
                    </div>
                   
                  </div>
                <div>
                  <Link to={`/article/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 240 }}
                    />
                  </Link>
                  {/*like button*/}
                  {user && <LikeArticle id={id} likes={likes} />}
                      {createdBy && (
                        <span className="creator">Created by:{createdBy} </span>
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
                  <p>{createdAt.toDate().toDateString()} </p>
                  
                </div>
              </div>
          )
        )
      )}
    </div>
  );
}
