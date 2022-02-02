import "./App.css";
import "./nucat.css";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Container fluid>
      <Navbar bg="light" expand={true} sticky="top">
        <Navbar.Brand href="/"> MarysOnTheGo.tech</Navbar.Brand>
        <div
          id="navbarResponsive"
          className="navbar-nav flex-row justify-content-end"
        >
          <a className="nav-item me-2" href="/nucat">
            Home
          </a>
          <a className="nav-item " href="/aboutus">
            About
          </a>
        </div>
      </Navbar>
    </Container>
  );
}

export default App;
