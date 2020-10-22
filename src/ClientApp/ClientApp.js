import React, { useState } from "react";

const ClientApp = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setLoggedIn(true);
  };

  return (
    <div className="card">
      <div className="title">Client App</div>

      {isLoggedIn ? (
        <div>Welcome!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label>
              Username: <input type="text" />
            </label>
          </div>

          <div className="form-item">
            <label>
              Password:{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button className="btn-submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default ClientApp;
