// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./apps/home";
import InvoicingApp from "./apps/Invoicing/Index";
import SaccoApp from "./apps/sacco/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/invoicing">Invoicing App</Link>
            </li>
            <li>
              <Link to="/sacco">Sacco App</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoicing" element={<InvoicingApp />} />
          <Route path="/sacco" element={<SaccoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
