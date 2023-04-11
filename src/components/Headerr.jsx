import React from "react";
import {PriceofProduct} from './component';
import { Link, Outlet } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

function  Header(){
    return(
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        <div className=" md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
           <p className="text-headingColor text-xl font-bold">TripAdvice</p>
        </div>
        <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8 ">
        <li>
        <Link to="/pages">Home</Link>
      </li>
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
            <Link to="">Services</Link>
            </PriceofProduct>
        </ul>
    </div>
    </div>
    </header>
    //<div><Header/> </div>
); 
}       
export default Header;