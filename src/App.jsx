import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import DragonBall from "./pages/DragonBall";
import RickAndMorty from "./pages/RickAndMorty";
import Jujutsu from "./pages/Jujutsu"; // <--- ESTE ES EL IMPORT QUE FALTA

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragon" element={<DragonBall />} />
        <Route path="/rickmorty" element={<RickAndMorty />} />
        {/* LA RUTA DEBE IR AQUÍ ADENTRO */}
        <Route path="/jujutsu" element={<Jujutsu />} /> 
      </Routes>
    </Router>
  );
}

export default App;