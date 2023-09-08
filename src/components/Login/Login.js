function Login() {
  return (
    <>
      <div className="signup">
        <div className="form_container">
          <h1>Login</h1>
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
