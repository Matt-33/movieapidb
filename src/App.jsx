import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
