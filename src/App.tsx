import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <h1>Box Office</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies/:id">Movie</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}

export default App;
