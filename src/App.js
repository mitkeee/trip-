import Articles from "./components/ArticleDisplay";
import AddArticle from "./components/AddArticle";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
import Contact from "./components/Contactus";
import Home from "./components/Home";
import About from "./components/About";
const App = () => {

  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home/>} />
          <Route path="Article/:id" element={<Article/>} />
          <Route path="AddArticles" element={<AddArticle />} />
          <Route path="Articles" element={<Articles />} />
          <Route path="Contactus" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
