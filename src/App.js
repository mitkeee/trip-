import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import React from "react";
import Header from "./components/Headerr";
import Homee from "./components/HomePage";
import Home from "./pages"
import AboutUs from "./components/AboutUs"
const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/components/HomePage" element={ <Homee/> } />
          <Route path="/pages" element={ <Home/> } />
          <Route path="/components/AboutUs" element={ <AboutUs/> } />
        </Routes>
        <Header/> 
      </Router>
    </div>
  );
}

export default App;
