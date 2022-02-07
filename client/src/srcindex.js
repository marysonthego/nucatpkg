import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NucatApp from "./App";
import { ScrollToTop } from "./ScrollToTop";
import Nucat from "./Nucat";
import { AboutUs } from "./AboutUs";
import "./index.css";
import "./nucat.css";

ReactDOM.render(
  <>
    <React.StrictMode>
      <NucatApp />
      <Router>
        <Routes>
          <Route path="/nucat" element={<Nucat />} />
          <Route path="/" element={<Navigate replace to="/nucat" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Navigate replace to="/nucat" />} />
        </Routes>
      </Router>
      <ScrollToTop className="ScrollToTop" />
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
