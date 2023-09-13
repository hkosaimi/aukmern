import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };
  return (
    <>
      <div className="signup">
        <div className="form_container">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                I've read and agreed to the <Link>policy</Link>
              </p>
            </div>

            <button disabled={isLoading}>Signup</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
