import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors
  const navigate = useNavigate(); // For redirecting the user

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission

    // Check if passwords match
    if (password !== confirmPassword) {
      setError({ non_field_errors: ["The passwords don't match"] });
      return;
    }

    try {
      // The axios request with withCredentials
      await axios.post(
        "https://housegram-rest-api-de7c6ab4d6fb.herokuapp.com/dj-rest-auth/registration/",
        {
          username,
          password1: password,
          password2: confirmPassword,
        },
        { withCredentials: true }  // Ensure credentials are included
      );
      console.log("Account created successfully");

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      setError(error.response?.data); // Capture error messages
      console.error("There was an error creating the account!", error.response);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* Header for the signup form */}
          <h2 className="text-center mb-4">Create an account</h2>

          {/* Conditionally render the alert if there is an error */}
          {error && (
            <div className="alert alert-warning" role="alert">
              {error.non_field_errors
                ? error.non_field_errors.join(", ")
                : "There was an issue with your signup. Please try again."}
            </div>
          )}

          <form onSubmit={handleSubmit}>
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Sign Up
            </button>
          </form>

          <button
            onClick={() => navigate("/login")}
            className="btn btn-white mt-3 w-100"
            style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
