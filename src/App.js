// src/App.js
import React from "react";
import { createContext, useState, useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";

// Create AuthContext
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className={styles.App}>
        <NavigationBar />
        <Container className={styles.Main}>
          <Routes>
            <Route path="/login" element={<LogInForm />} />
            <Route path="/create-account" element={<SignUpForm />} />
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
