import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import Home from "./Views/Home";
import RouteGuard from "./Views/RouteGuard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RouteGuard />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
