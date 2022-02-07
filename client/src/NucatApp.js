import "./App.css";
import "./nucat.css";
import "./styles.css";
import React from "react";
import "./index.css";

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
