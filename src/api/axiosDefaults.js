// src/api/axiosDefaults.js

import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios.defaults.withCredentials = true; // Important for handling cookies

// Function to attach token
const attachTokenToAxios = () => {
  const token = localStorage.getItem('authToken'); // Get the token from localStorage

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the Authorization header
  } else {
    delete axios.defaults.headers.common['Authorization']; // If no token, remove the Authorization header
  }
};

// Call the function to attach the token
attachTokenToAxios();

export const axiosReq = axios.create();
export const axiosRes = axios.create();
