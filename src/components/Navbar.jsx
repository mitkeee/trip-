import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import "./style.css"

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="in">

      {user ? (
            <>
              <span className="user">
                Welcome {user.displayName}
              </span>
              <button className="button3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
              
          <ul className="">
            <li className="makeRow">
                <Link to="/Home" className="PriceofProduct">Home</Link>
            </li>
            <li className="makeRow">
            <Link to="/AddArticles" className="PriceofProduct">AddArticle</Link>
            </li>
            <li className="makeRow">
            <Link to="/Articles" className="PriceofProduct">ViewArticles</Link>
            </li>
            <li className="makeRow">
            <Link to="/contactus" className="PriceofProduct">Contact us</Link>
            </li>
            <li className="makeRow">
            <Link to="/About" className="PriceofProduct">About</Link>
            </li>
        </ul>
            </>
            
          ):(
          
        <ul className="lis">
        <Link to="/" className="PriceofProduct">
      TripAdvice
      </Link>
            <li className="makeRow">
                <Link to="/Home" className="PriceofProduct">Home</Link>
            </li>
            <li className="makeRow">
            <Link to="/login" className="PriceofProduct">Login</Link>
            </li>
            <li className="makeRow">
            <Link to="/AddArticles" className="PriceofProduct">AddArticle</Link>
            </li>
            <li className="makeRow">
            <Link to="/Articles" className="PriceofProduct">ViewArticles</Link>
            </li>
            <li className="makeRow">
            <Link to="/contactus" className="PriceofProduct">Contact us</Link>
            </li>
            <li className="makeRow">
            <Link to="/About" className="PriceofProduct">About</Link>
            </li>
        </ul>
    )}      
    </div>
    
  );
}
