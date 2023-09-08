import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <>
      <div className="signup">
        <div className="form_container">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button>Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
