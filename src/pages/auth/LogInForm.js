import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import loadingGif from "../../assets/loading.gif"; // Import the loading GIF
import styles from "../../styles/SignInUpForm.module.css"; // Import the CSS module for styles

function LoginPage() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null); // State for handling errors
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [loading, setLoading] = useState(false); // State for loading

  const navigate = useNavigate(); // Initialize navigate function

  const { username, password } = signInData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission
    setLoading(true); // Show the loader

    try {
      // Post the signInData to the login endpoint
      await axios.post("/dj-rest-auth/login/", signInData);
      console.log("Login successful");

      // Simulate a delay (e.g., waiting for the request to complete)
      setTimeout(() => {
        setLoading(false); // Hide the loader
        navigate("/"); // Redirect to the home page after successful login
      }, 1500); // Adjust the delay time to 1500 milliseconds

    } catch (error) {
      setError(error.response?.data); // Capture error messages
      setLoading(false); // Hide the loader if there's an error
    }
  };

  const handleSignupRedirect = () => {
    navigate("/create-account"); // Redirect to the create-account page
  };

  return (
    <div className="container mt-5">
      {loading && (
        <div className={styles.loadingOverlay}>
          <img src={loadingGif} alt="Loading..." className={styles.loadingSpinner} />
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* Header for the login form */}
          <h2 className="text-center mb-4">Login to your account</h2>

          {/* Conditionally render the alert if there is an error */}
          {error && (
            <div className="alert alert-warning" role="alert">
              {error.non_field_errors
                ? error.non_field_errors.join(", ")
                : "There was an issue with your login. Please try again."}
            </div>
          )}

          {/* Form submission handled by handleSubmit */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username} // Bind value to the signInData state
                onChange={handleChange} // Handle input changes
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={password} // Bind value to the signInData state
                onChange={handleChange} // Handle input changes
                required
              />
              <span
                className="material-symbols-outlined position-absolute"
                style={{ top: "40px", right: "10px", cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
          </form>

          <button
            onClick={handleSignupRedirect}
            className="btn btn-white mt-3 w-100"
            style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}
          >
            Create an account here
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
