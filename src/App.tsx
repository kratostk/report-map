import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Tracker from "./views/Tracker";
import RouteGuard from "./views/RouteGuard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tracker/:id" element={<Tracker />} />
          <Route path="/" element={<RouteGuard />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
