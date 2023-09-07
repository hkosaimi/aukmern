import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup">
        <h1>Signup</h1>
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button>Signup</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
