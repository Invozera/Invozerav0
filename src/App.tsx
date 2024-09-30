import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./apps/home";
import InvoicingApp from "./apps/Invoicing/Index";
import SaccoApp from "./apps/sacco/index";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoicing" element={<InvoicingApp />} />
            <Route path="/sacco" element={<SaccoApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
