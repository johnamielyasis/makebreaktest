import React from "react";

import { Classic, Temperature, Gradient, Classic2 } from "../../pages/index.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
    <>
    <Router>
    <nav>
        <Link to="/">Classic | </Link>
        <Link to="/classic2">Classic 2 | </Link>
        <Link to="/temperature">Temperature | </Link>
        <Link to="/gradient">Gradient | </Link>
        <Link to="/hidden">Hidden</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Classic />}>
        Classic
        </Route>
        <Route path="/classic2" element={<Classic2 />}>
        Classic
        </Route>
        <Route path="/temperature" element={<Temperature />}>
        Temperature
        </Route>
        <Route path="/gradient" element={<Gradient />}>
        Gradient
        </Route>
    </Routes>
    </Router>
    </>
);
};

export default Navbar;
