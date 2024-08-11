import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors

  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission

    try {
      // Replace this URL with your actual login endpoint
      await axios.post("/dj-rest-auth/login/", {
        username,
        password,
      });
      console.log("Login successful");
      // Handle successful login (e.g., redirect or show a success message)
    } catch (error) {
      setError(error.response?.data); // Capture error messages
    }
  };

  const handleSignupRedirect = () => {
    navigate("/create-account"); // Redirect to the create-account page
  };

  return (
    <div className="container mt-5">
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

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
