import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../assets/logo2.png";
import styles from "../styles/NavigationBar.module.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className={styles.NavigationBar} fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={logo2}
              alt="logo"
              height={50}
              style={{
                borderRadius: "50%", // Makes the image round
                objectFit: "cover", // Ensures the image covers the area without distortion
              }}
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={styles.NavLink}>
              <span className="material-symbols-outlined">home</span> Home
            </NavLink>
            <NavLink to="/login" className={styles.NavLink}>
              <span className="material-symbols-outlined">key</span> Login
            </NavLink>
            <NavLink to="/create-account" className={styles.NavLink}>
              <span className="material-symbols-outlined">person_add</span> Create Account
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;