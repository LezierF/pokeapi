import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './home/index'
import { PokemonDetail } from "./details";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};
