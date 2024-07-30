import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../assets/logo2.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo2}
            alt="logo"
            height={50}
            style={{
              borderRadius: "50%", // This makes the image round
              objectFit: "cover", // This ensures the image covers the area without distortion
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <span className="material-symbols-outlined">home</span> Home
            </Nav.Link>
            <Nav.Link>
              <span className="material-symbols-outlined">key</span> Login
            </Nav.Link>
            <Nav.Link>
              <span className="material-symbols-outlined">person_add</span> Create Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
