import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const signup = async (username, email, password) => {
    setError(null);

    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { signup, error };
};
