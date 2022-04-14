import { Home, Temperature, Gradient } from './pages/index.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Make or Break Concepts</h1>
      <Router>
        <nav>
          <Link to="/">Home | </Link>
          <Link to="/temperature">Temperature | </Link>
          <Link to="/gradient">Gradient</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/temperature" element={<Temperature />}>Temperature</Route>
          <Route path="/gradient" element={<Gradient />}>Gradient</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
