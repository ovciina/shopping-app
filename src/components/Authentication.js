import React, { useState } from "react";

export default function Authentication({ setIsLoggedIn, navigateTo }) {
  const [username, SetUsername] = useState(undefined);
  const [password, SetPassword] = useState(undefined);
  const users = [
    {
      username: "Jasmin",
      password: "12345",
    },
    {
      username: "Josip",
      password: "12345",
    },
  ];

  const isAuthenticated = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Must enter a username and password, please try again.");
      return;
    }

    let authenticated = false;
    users.forEach((user) => {
      if (username === user.username && password === user.password) {
        console.log(user.username, user.password);
        setIsLoggedIn(true);
        navigateTo("products");
        authenticated = true;
      }
    });
    if (!authenticated) {
      alert("Wrong username or password, please try again.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={isAuthenticated}>
        <h3 className="text-center mt-3 mb-3">Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            onChange={(e) => SetUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
