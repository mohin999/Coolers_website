// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import { Grid } from '@mui/material';

import Home from './components/homePage';
import Login from './components/login';
import Register from './components/register';
import AddCustomers from './components/addCustomers';
import CustomerCard from './components/customerCard';
import ReportPage from './components/reportPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Grid padding='20px'>
        <Routes>
  <Route
    path="/"
    element={<Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}
  />
  <Route
    path="/register"
    element={<Register setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}
  />
  <Route
    path="/home"
    element={isLoggedIn ? <Home /> : <Navigate to="/" />}
  />
  <Route
    path="/addCustomers"
    element={isLoggedIn ? <AddCustomers /> : <Navigate to="/" />}
  />
  <Route
    path="/customerCard"
    element={isLoggedIn ? <CustomerCard /> : <Navigate to="/" />}
  />
  <Route
    path="/report"
    element={isLoggedIn ? <ReportPage /> : <Navigate to="/" />}
  />
</Routes>

      </Grid>
    </Router>
  );
}

export default App;
