import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/login" element={<h1>Login here</h1>} />
          <Route path="/create-account" element={<h1>Create Account</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}