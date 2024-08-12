// src/components/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from '../pages/auth/SignUpForm.jsx';
import LogInForm from '../pages/auth/LogInForm.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LogInForm />} />
      <Route path="/create-account" element={<SignUpForm />} />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
