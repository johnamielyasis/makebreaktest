import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gradient, Classic2 } from "./pages/index.js";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <h1>Make or Break Concepts</h1>
      <h2>Select a game mode</h2> */}
      <Router>
        <Routes>
          <Route path="/" element={<Classic2 />} />
          {/* <Route path="/temperature" element={<Temperature />}>
            Temperature
          </Route> */}
          <Route path="/gradient" element={<Gradient />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

  /* <nav>
        <Link to="/">Classic | </Link>
        <Link to="/classic2">Classic 2 | </Link>
        <Link to="/temperature">Temperature | </Link>
        <Link to="/gradient">Gradient | </Link>
        <Link to="/hidden">Hidden</Link>
    </nav> */
