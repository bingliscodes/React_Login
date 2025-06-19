function AuthForm() {
  console.log("here");
  return (
    <form>
      <p>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
    </form>
  );
}

export default AuthForm;
