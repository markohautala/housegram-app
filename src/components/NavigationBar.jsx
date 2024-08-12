import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../assets/logo2.png";
import styles from "../styles/NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function NavigationBar() {
  const { isAuthenticated, logout } = useAuth();

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
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <>
                <NavLink to="/" className={styles.NavLink}>
                  <span className="material-symbols-outlined">home</span> Home
                </NavLink>
                <NavLink to="/upload" className={styles.NavLink}>
                  <span className="material-symbols-outlined">add_photo_alternate</span> Upload
                </NavLink>
                <NavLink to="/profile" className={styles.NavLink}>
                  <span className="material-symbols-outlined">account_box</span> Profile
                </NavLink>
                <NavLink
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                  className={styles.NavLink}
                >
                  <span className="material-symbols-outlined">logout</span> Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className={styles.NavLink}>
                  <span className="material-symbols-outlined">key</span> Login
                </NavLink>
                <NavLink to="/create-account" className={styles.NavLink}>
                  <span className="material-symbols-outlined">person_add</span> Create Account
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
