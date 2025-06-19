import { useState } from "react";
import { useNavigate } from "react-router";

import classes from "./LoginPage.module.css";

const VALID_USERNAME = "test";
const VALID_PASSWORD = "test";

export default function LoginPage() {
  const navigate = useNavigate();
  const [logInError, setLoginError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

    const enteredUserName = entries.username;
    const enteredPassword = entries.password;

    if (
      enteredUserName === VALID_USERNAME &&
      enteredPassword === VALID_PASSWORD
    ) {
      localStorage.setItem("logged in", "true");
      navigate("/profile");
    } else {
      localStorage.setItem("logged in", "false");
      setLoginError(true);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <p>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div>{logInError && <p>Username or password is invalid.</p>}</div>
      <p>
        <button>Log In</button>
      </p>
    </form>
  );
}
