import { useEffect } from "react";
function Signup() {
  useEffect(() => {
    const fetchUser = async (req, res) => {
      const response = await fetchUser("/api/users");
      const json = response.json();

      if (response.ok) {
        dispatchEvent();
      }
    };
  });
  return (
    <>
      <div></div>
    </>
  );
}

export default Signup;
