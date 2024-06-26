import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [successText, setSuccessText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setSuccessText(
        "Everything is perfect. Your account is ready and we should probably get you started!"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
      </div>
      <button type="submit">Submit</button>
      {!isFormValid && <span aria-label="invalid-form">Invalid form</span>}
      {successText}
    </form>
  );
};

export default LoginForm;
