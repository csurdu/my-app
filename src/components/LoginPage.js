import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded users array for authentication
  const hardcodedUsers = [
    { id: 1, email: "john@example.com", password: "1234", role: "Hotel Manager" },
    { id: 2, email: "jane@example.com", password: "5678", role: "Group Manager" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with an API call to authenticate the user
    const user = hardcodedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
