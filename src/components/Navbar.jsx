import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import {PriceofProduct, ListWrapper} from './component';

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Home{" "}
        </Link>
        <ListWrapper>
        <ul className="flex items-center gap-8 ">
            <PriceofProduct>
                <Link to="/components/HomePage">Home</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="">Menu</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/AddArticles">AddArticle</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/Articles">ViewArticles</Link>
            </PriceofProduct>
        </ul>
        </ListWrapper>
        <div>
          {user && (
            <>
              <span className="pe-4">
                Signed is as {user.displayName || user.email}
              </span>
              <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
