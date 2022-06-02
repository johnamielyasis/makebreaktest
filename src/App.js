import { 
  Classic, 
  Temperature, 
  Gradient } from './pages/index.js';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link } from "react-router-dom";

function App() {
  

  return (
    <>
      <h1>Make or Break Concepts</h1>
      <h2>Select a game mode</h2>
      <Router>
        <nav>
          <Link to="/">Classic | </Link>
          <Link to="/temperature">Temperature | </Link>
          <Link to="/gradient">Gradient | </Link>
          <Link to="/hidden">Hidden</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Classic />}>Classic</Route>
          <Route path="/temperature" element={<Temperature />}>Temperature</Route>
          <Route path="/gradient" element={<Gradient />}>Gradient</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
