// Import necessary libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

// Components
import LoginPage from "./components/LoginPage";
import GroupManagerPage from "./components/GroupManagerPage";
import HotelPage from "./components/HotelPage";

// App Component
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!user ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/hotels">Hotel Page</Link>
                </li>
                {user.role === "Group Manager" && (
                  <li>
                    <Link to="/group-manager">Group Manager</Link>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route
            path="/login"
            element={!user ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/hotels" />}
          />
          <Route
            path="/hotels"
            element={user ? <HotelPage user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/group-manager"
            element={
              user && user.role === "Group Manager" ? (
                <GroupManagerPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
