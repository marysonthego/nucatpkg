import "./App.css";
import "./nucat.css";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./index.css";

function NucatApp() {

  return (
      <Navbar bg="light" sticky="top">
        <Container>
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
        </Container>
      </Navbar>
  );
}
export default NucatApp;
