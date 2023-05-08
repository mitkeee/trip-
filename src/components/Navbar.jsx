import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import {PriceofProduct, ListWrapper} from './component';
import "./style.css"

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="in">
      <nav className="container">
      <Link className="nav-link" to ="/">
      TripAdvice{""}
      </Link>
        <ListWrapper>
        <ul className="lis">
            <PriceofProduct>
                <Link to="/components/HomePage">Home</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/login">Login</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/AddArticles">AddArticle</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/Articles">ViewArticles</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/contactus">Contact us</Link>
            </PriceofProduct>
        </ul>
        </ListWrapper>
        <div>
          {user && (
            <>
              <span className="user">
                Welcome {user.displayName}
              </span>
              <button className="logg"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
