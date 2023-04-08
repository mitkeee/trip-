import React from "react";
import {PriceofProduct} from './component';

function  Header(){
    return(
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        <div className=" md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
           <p className="text-headingColor text-xl font-bold">TripAdvice</p>
        </div>
        <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8 ">
            <PriceofProduct>Home</PriceofProduct>
            <PriceofProduct>Menu</PriceofProduct>
            <PriceofProduct>About Us</PriceofProduct>
            <PriceofProduct>Services</PriceofProduct>
        </ul>
    </div>
    </div>
    </header>
); 
}       
export default Header;