import './App.css';
import React from "react";
import Header from "./components/Headerr";
import {BrowserRouter,Router,Route, Routes} from "react-router-dom";
import Homee from "./components/HomePage";
import Home from "./pages"
import AboutUs from "./components/AboutUs"

const App = () => {
  return (
    <div>
      <Header/>   
        <Routes>
          <Route path="/components/HomePage" element={ <Homee/> } />
          <Route path="/pages" element={ <Home/> } />
          <Route path="/components/AboutUs" element={ <AboutUs/> } />
        </Routes>
      </div>
  );
}

export default App;
