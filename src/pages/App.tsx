import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './home/index'
import { Content } from "../components/pokemonDetail/content";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Content />} />
      </Routes>
    </Router>
  );
};
