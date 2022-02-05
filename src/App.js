import "./App.css";
import "./nucat.css";
import "./styles.css";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./index.css";

function NucatApp() {
  return (
    <div>
      <Navbar.Brand href="/"> MarysOnTheGo.tech</Navbar.Brand>
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

