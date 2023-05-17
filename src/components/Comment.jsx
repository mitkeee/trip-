import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { auth } from "./../firebaseConfig";
import "./style.css";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const commentRef = doc(db, "Articles", id);
  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      const comments = snapshot.data()?.comments;
      if (comments) {
        setComments(comments);
      }
    });
  }, [id]);
  
  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: currentlyLoggedinUser.uid,
          userName: currentlyLoggedinUser.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };
  // delete comment function
  const handleDeleteComment = (commentId) => {
    updateDoc(commentRef, {
      comments: arrayRemove(comments.find((c) => c.commentId === commentId)),
    })
      .then(() => {
        console.log("Comment deleted successfully");
      })
      .catch((error) => {
        console.log("Error deleting comment: ", error);
      });  
  };
  return (
    <div>
      Comments:
      <div>
        {comments !== null &&
          comments.map(({ commentId, user, comment, userName }) => (
            <div key={commentId}>
              <div className="com">
                
                  <span
                    className={`badge ${
                      user === currentlyLoggedinUser.uid
                        ? "bg-success"
                        : "bg-primary"
                    }`}
                  >
                    {userName}:
                  </span>
                  {comment}
                  {user === currentlyLoggedinUser.uid && (
                    <button className="button3"
                      onClick={() => handleDeleteComment(commentId)}
                    >X</button>
                  )}
              </div>
            </div>
          ))}
        {currentlyLoggedinUser && (
          <input
            type="text"
            className="commentt"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        )}
      </div>
    </div>
  );
}