import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

// Home Component Routing !!!

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
