import React from "react";
import {PriceofProduct, ListWrapper} from './component';
import { Link } from "react-router-dom";
import "./style.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";
function  Header(){
    const [user] = useAuthState(auth);
    return(
    <header className="fixed z-50 w-screen p-6 px-16 ">
        <div className=" hidden md:flex w-full h-full ">
        <div className="flex items-center gap-2">
           <h1>TripAdvice</h1>
        </div>
        
        <ListWrapper>
        <ul className="flex items-center gap-8 ">
            <PriceofProduct>
                <Link to="/components/HomePage">Home</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="">Menu</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/components/AboutUs">AboutUs</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/components/share">Share</Link>
            </PriceofProduct>
            <PriceofProduct>
            <Link to="/components/signUp">Signup</Link>
            </PriceofProduct>
        </ul>
        </ListWrapper>
        <div>
          {user && (
            <>
              <span className="pe-5 ">
                Welcome  {user.displayName}
              </span>
              <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div>
    </div>
    </header>
); 
}       
export default Header;