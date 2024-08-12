import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/loading.gif";
import styles from "../../styles/SignInUpForm.module.css";
import { useAuth } from '../../context/AuthContext';

function LogInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate();
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
    setError(null);
    setLoading(true);

    try {
      // Use the correct API endpoint and set Content-Type to application/json
      const response = await axios.post(
        "https://housegram-rest-api-de7c6ab4d6fb.herokuapp.com/dj-rest-auth/login/",
        signInData,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      console.log("Login successful");
      const token = response.data.key; // Adjust based on your API's response structure
      login(token); // Update authentication state and store token
      navigate("/"); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Login error response:', error.response?.data || error.message);
      setError(error.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/create-account");
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
          <h2 className="text-center mb-4">Login to your account</h2>
          {error && (
            <div className="alert alert-warning" role="alert">
              {error.non_field_errors
                ? error.non_field_errors.join(", ")
                : "There was an issue with your login. Please try again."}
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
                name="username"
                value={username}
                onChange={handleChange}
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
                value={password}
                onChange={handleChange}
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

export default LogInForm;
