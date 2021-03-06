import "./App.css";
import "./nucat.css";
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import Nucat from "./Nucat";
import { AboutUs } from "./AboutUs";
import "./index.css";

ReactDOM.render(
  <>
    <React.StrictMode>
      <NucatApp />
      <Router>
        <Routes>
          <Route path="/nucat" element={<Nucat />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      <ScrollToTop className="ScrollToTop" />
    </React.StrictMode>
  </>,
  document.getElementById("root")
);

function NucatApp() {
  return (
    <div>
      <div
        id="navbarResponsive"
        className="navbar-nav flex-row justify-content-end"
      >
        <a className="nav-item me-2" href="/nucat">
          Home
        </a>
        <a className="nav-item me-2" href="/aboutus">
          About
        </a>
      </div>
    </div>
  );
}
export default NucatApp;
