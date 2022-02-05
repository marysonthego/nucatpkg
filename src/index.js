import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NucatApp from "./NucatApp";
import { ScrollToTop } from "./ScrollToTop";
import Nucat from "./Nucat";
import { AboutUs } from "./AboutUs";
import Container from "react-bootstrap/Container";
import "./index.css";
import "./nucat.css";

ReactDOM.render(
  <>
    <React.StrictMode>
      <Container fluid className="background">
        <Router>
        <ScrollToTop className="ScrollToTop" />
          <NucatApp />
          
          <Routes>
            <Route path="/nucat" element={<Nucat />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
      
    
          <div className="footer">&copy;2022&nbsp;marysonthego.tech</div>
          </Router>
      </Container>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
