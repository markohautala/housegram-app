import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/login" element={ <LogInForm/> } />
          <Route path="/create-account" element={ <SignUpForm/> } />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
