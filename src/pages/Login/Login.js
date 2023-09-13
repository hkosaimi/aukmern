function Login() {
  return (
    <>
      <div className="signup">
        <div className="form_container">
          <h1>Login</h1>
          <form>
            <label>Username</label>
            <input type="text" placeholder="username" />
            <label>Password</label>
            <input type="password" placeholder="Email" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
