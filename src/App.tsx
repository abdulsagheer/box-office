import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies/:id">Movie</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
