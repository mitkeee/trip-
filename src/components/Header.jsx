import React from "react";


const Header = () => {
    return(
    <div> 

    <header className="fixed z-50 w-screen p-6 px-16">
    <div className="hidden md:flex w-fill h-full">
        <div className="flex items-center gap-2">
           <p className="text-headingColor text-xl font-bold">TripAdvice</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services</li>
        </ul>
    </div>
</header>
</div>
); 
}       
export default Header;