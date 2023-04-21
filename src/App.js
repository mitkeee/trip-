import Articles from "./components/Articles";
import AddArticle from "./components/AddArticles";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/Article/:id" element={<Article/>} />
          <Route path="/AddArticles" element={<AddArticle />} />
          <Route path="/Articles" element={<Articles />} />
          
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
